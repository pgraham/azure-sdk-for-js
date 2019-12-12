let nock = require('nock');

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/recoverCertificateName-canupdatecertificatewithrequestOptionstimeout-/create')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '4f7668b2-ee07-4bee-81b5-e8156e0a2e86',
  'x-ms-keyvault-service-version',
  '1.1.0.882',
  'x-ms-keyvault-network-info',
  'addr=13.66.157.165;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 18 Nov 2019 21:44:28 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3600,"ext_expires_in":3600,"access_token":"access_token"}, [
  'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '0c0bb87f-52cc-46a3-831f-3c685095e100',
  'x-ms-ests-server',
  '2.1.9677.8 - NCUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=ApSZMdR7oAFMg9hbOi6N5Ts_aSJHAQAAALwHZdUOAAAA; expires=Wed, 18-Dec-2019 21:44:29 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; SameSite=None; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; SameSite=None; secure; HttpOnly',
  'Date',
  'Mon, 18 Nov 2019 21:44:29 GMT',
  'Content-Length',
  '1231'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .post('/certificates/recoverCertificateName-canupdatecertificatewithrequestOptionstimeout-/create', {"policy":{"key_props":{},"secret_props":{},"x509_props":{"subject":"cn=MyCert","sans":{}},"issuer":{"name":"Self"},"attributes":{}},"attributes":{}})
  .query(true)
  .reply(202, {"id":"https://keyvault_name.vault.azure.net/certificates/recoverCertificateName-canupdatecertificatewithrequestOptionstimeout-/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsFVpSYbkVtpH8oEJwY7dwMGza5za8vwygYxiPbufxkVNML09KfEvK9CFl/OSt1XEd4Wbm5QQMaf+mc4qCWz7PEg2HowXdHfLcsmCotdhuijh3flOEmx0elMYbv2pp4R5BLK6cLLo4nEV79IaKNKxZGe9eGbHQWQukAnAkOu7kHRcZnZ9OwLVaQleTg4Xg/fySD/rtHx625OJHB9ubgvrr8pEFqtkXD0LVIqpboe+prinFW1li+gkZ9JVGOHRjOkGypq2VepLxCOpsmmLEua7nUlT3tCjbk5wATNKfER2aXro+0JdEMik6M034AcL/nrydkTNoxDFvvcUo2YEPXvS6QIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBABsKFqJjzWSSCshv5jMEK5q6Q5+VBaFYjFN9Rfe9l9OLRCq4gVzEYjLcKp6Fo0E7mm5lRo++KHK8oAXNNFMEp2qVdCLFOjaOZIt69BvStnsx0ogNz62ouJyGY0yAnzxs8wg4ZJiyG5pTBnVxgLmzYLnbbA+dZB+rqEtTWv0/1lM53jQ3cvTfUGNc18sSWiVzz8unrtLHqdBWlExgasaZB3/qAhnJM0YDcanHtff2miQJjanXQE1Pfx1Y8xSuJ2Wl68pbAJfsrFAO/MkSwE3Dcj2RYhsIJW0ons5+Swa7sjlwPeJCugWmRVchT/uKGAkPjkSlM9dhzPgMyXk61rwL7T0=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"6841ae09dacf4b9da80475b395b8e2a5"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  'https://keyvault_name.vault.azure.net/certificates/recoverCertificateName-canupdatecertificatewithrequestOptionstimeout-/pending?api-version=7.0&request_id=6841ae09dacf4b9da80475b395b8e2a5',
  'Retry-After',
  '10',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '4a3e8b91-b029-4fc6-9f2e-8ab1545a2b1d',
  'x-ms-keyvault-service-version',
  '1.1.0.882',
  'x-ms-keyvault-network-info',
  'addr=13.66.157.165;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 18 Nov 2019 21:44:30 GMT',
  'Content-Length',
  '1355'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/recoverCertificateName-canupdatecertificatewithrequestOptionstimeout-/pending')
  .query(true)
  .reply(401, {"error":{"code":"Unauthorized","message":"Request is missing a Bearer or PoP token."}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '87',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Server',
  'Microsoft-IIS/10.0',
  'WWW-Authenticate',
  'Bearer authorization="https://login.windows.net/azure_tenant_id", resource="https://vault.azure.net"',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  'cb3b52a4-9d2e-4e02-8f87-e0f08f13b6b2',
  'x-ms-keyvault-service-version',
  '1.1.0.882',
  'x-ms-keyvault-network-info',
  'addr=13.66.157.165;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 18 Nov 2019 21:44:30 GMT'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fvault.azure.net%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [
  'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  'b48afb97-0069-4334-a400-b2f670638800',
  'x-ms-ests-server',
  '2.1.9677.8 - EUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=ApSZMdR7oAFMg9hbOi6N5Ts_aSJHAgAAALwHZdUOAAAA; expires=Wed, 18-Dec-2019 21:44:31 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; SameSite=None; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; SameSite=None; secure; HttpOnly',
  'Date',
  'Mon, 18 Nov 2019 21:44:30 GMT',
  'Content-Length',
  '1231'
]);

nock('https://keyvault_name.vault.azure.net:443', {"encodedQueryParams":true})
  .get('/certificates/recoverCertificateName-canupdatecertificatewithrequestOptionstimeout-/pending')
  .query(true)
  .reply(200, {"id":"https://keyvault_name.vault.azure.net/certificates/recoverCertificateName-canupdatecertificatewithrequestOptionstimeout-/pending","issuer":{"name":"Self"},"csr":"MIICoTCCAYkCAQAwETEPMA0GA1UEAxMGTXlDZXJ0MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsFVpSYbkVtpH8oEJwY7dwMGza5za8vwygYxiPbufxkVNML09KfEvK9CFl/OSt1XEd4Wbm5QQMaf+mc4qCWz7PEg2HowXdHfLcsmCotdhuijh3flOEmx0elMYbv2pp4R5BLK6cLLo4nEV79IaKNKxZGe9eGbHQWQukAnAkOu7kHRcZnZ9OwLVaQleTg4Xg/fySD/rtHx625OJHB9ubgvrr8pEFqtkXD0LVIqpboe+prinFW1li+gkZ9JVGOHRjOkGypq2VepLxCOpsmmLEua7nUlT3tCjbk5wATNKfER2aXro+0JdEMik6M034AcL/nrydkTNoxDFvvcUo2YEPXvS6QIDAQABoEswSQYJKoZIhvcNAQkOMTwwOjAOBgNVHQ8BAf8EBAMCBaAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMAkGA1UdEwQCMAAwDQYJKoZIhvcNAQELBQADggEBABsKFqJjzWSSCshv5jMEK5q6Q5+VBaFYjFN9Rfe9l9OLRCq4gVzEYjLcKp6Fo0E7mm5lRo++KHK8oAXNNFMEp2qVdCLFOjaOZIt69BvStnsx0ogNz62ouJyGY0yAnzxs8wg4ZJiyG5pTBnVxgLmzYLnbbA+dZB+rqEtTWv0/1lM53jQ3cvTfUGNc18sSWiVzz8unrtLHqdBWlExgasaZB3/qAhnJM0YDcanHtff2miQJjanXQE1Pfx1Y8xSuJ2Wl68pbAJfsrFAO/MkSwE3Dcj2RYhsIJW0ons5+Swa7sjlwPeJCugWmRVchT/uKGAkPjkSlM9dhzPgMyXk61rwL7T0=","cancellation_requested":false,"status":"inProgress","status_details":"Pending certificate created. Certificate request is in progress. This may take some time based on the issuer provider. Please check again later.","request_id":"6841ae09dacf4b9da80475b395b8e2a5"}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Retry-After',
  '10',
  'Server',
  'Microsoft-IIS/10.0',
  'x-ms-keyvault-region',
  'westus',
  'x-ms-request-id',
  '77ce13e7-0619-4e32-bd24-bd21edecffb8',
  'x-ms-keyvault-service-version',
  '1.1.0.882',
  'x-ms-keyvault-network-info',
  'addr=13.66.157.165;act_addr_fam=InterNetwork;',
  'X-AspNet-Version',
  '4.0.30319',
  'X-Powered-By',
  'ASP.NET',
  'Strict-Transport-Security',
  'max-age=31536000;includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Mon, 18 Nov 2019 21:44:30 GMT',
  'Content-Length',
  '1355'
]);