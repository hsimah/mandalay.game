Add-Type -AssemblyName system.web

$Uri = 'https://localhost:8081'
$DatabaseId = 'gamedb'
$CollectionId = 'cards'
$Key = 'C2y6yDjf5/R+ob0N8A7Cgv30VRDJIWEHLM+4QDU5DE2nQ9nDuVTqobD4b8mGGyPMbIZnqyMsEcaGQy67XIw/Jw=='
$Date = (Get-Date).ToUniversalTime().ToString('r')

function Get-AuthHeader($Key, $ResourceType, $ResourceLink = '', $Date) {
    $Crypt = New-Object -TypeName system.security.cryptography.hmacsha256
    $Crypt.Key = [system.convert]::FromBase64String($Key)
    $Payload = @"
post
$ResourceType
$ResourceLink
$($Date.ToLowerInvariant())


"@
    $Hash = $Crypt.ComputeHash([system.text.encoding]::UTF8.GetBytes($Payload))
    $Sig = [system.convert]::ToBase64String($Hash)
    $Auth = [system.web.httputility]::UrlEncode("type=master&ver=1.0&sig=$Sig")

    return @{
        authorization  = $Auth
        'x-ms-version' = '2017-02-22'
        'x-ms-date'    = $Date
    }
}

$DatabaseParams = @{
    Uri         = "$Uri/dbs"
    Method      = 'Post'
    Headers     = (Get-AuthHeader -Key $Key -Date $Date -ResourceType 'dbs')
    ContentType = 'application/json'
    Body        = (@{ id = $DatabaseId } | ConvertTo-Json)
}

Invoke-WebRequest @DatabaseParams

$CollectionParams = @{
    Uri         = "$Uri/dbs/$DatabaseId/colls"
    Method      = 'Post'
    Headers     = (Get-AuthHeader -Key $Key -Date $Date -ResourceType 'colls' -ResourceLink "dbs/$DatabaseId")
    ContentType = 'application/json'
    Body        = (@{ id = $CollectionId } | ConvertTo-Json)
}

Invoke-WebRequest @CollectionParams

$Cards = Get-Content -Path (Join-Path $PSScriptRoot cards.json) -Raw | ConvertFrom-Json

$Cards | ForEach-Object {
    $Params = @{
        Uri         = "$Uri/dbs/$DatabaseId/colls/$CollectionId/docs"
        Method      = 'Post'
        Headers     = (Get-AuthHeader -Key $Key -Date $Date -ResourceType 'docs' -ResourceLink "dbs/$DatabaseId/colls/$CollectionId")
        ContentType = 'application/json'
        Body        = ($_ | ConvertTo-Json)
    }
    
    Invoke-RestMethod @Params
}