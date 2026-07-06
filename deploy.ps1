# Run this AFTER logging into GitHub: gh auth login -h github.com -p https -w
$ErrorActionPreference = "Stop"
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Set-Location $PSScriptRoot

gh auth status | Out-Null

Write-Host "Creating GitHub repo and pushing..." -ForegroundColor Cyan
gh repo create portfolio --public --source=. --remote=origin --push

Write-Host "Enabling GitHub Pages (Actions)..." -ForegroundColor Cyan
gh api --method PUT /repos/usamashamshad/portfolio/pages -f build_type=workflow | Out-Null

Write-Host ""
Write-Host "Done! Your site will be live in ~2 minutes at:" -ForegroundColor Green
Write-Host "https://usamashamshad.github.io/portfolio/" -ForegroundColor Yellow
