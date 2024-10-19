---
title: Configuration
description: Configuration HTTP Server
sidebar_position: 2
---

# Configuration

When running the server with no options or flags provided, a set of default
configurations will be used. You can always change this behavior by either
creating your own config with the [Configuration TOML](https://github.com/http-server-rs/http-server/blob/main/fixtures/config.toml) file
or by providing CLI arguments described in the [usage](#usage) section.

| Name                 | Description                                                                                                                                                | Default     |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Host                 | Address to bind the server                                                                                                                                 | `127.0.0.1` |
| Port                 | Port to bind the server                                                                                                                                    | `7878`      |
| Root Directory       | The directory to serve files from                                                                                                                          | `CWD`       |
| File Explorer UI     | A File Explorer UI for the directory configured as the _Root Directory_                                                                                    | Enabled     |
| Configuration File   | Specifies a configuration file. [Example](https://github.com/http-server-rs/http-server/blob/main/fixtures/config.toml)                                    | Disabled    |
| HTTPS (TLS)          | HTTPS Secure connection configuration. Refer to [TLS (HTTPS)](https://github.com/http-server-rs/http-server#tls-https) reference                           | Disabled    |
| CORS                 | Cross-Origin-Resource-Sharing headers support. Refer to [CORS](https://github.com/http-server-rs/http-server#cross-origin-resource-sharing-cors) reference | Disabled    |
| Compression          | GZip compression for HTTP Response Bodies. Refer to [Compression](https://github.com/http-server-rs/http-server#compression) reference                     | Disabled    |
| Quiet                | Don't print server details when running. This doesn't include any logging capabilities.                                                                    | Disabled    |
| Index                | Route directories to index.html if present                                                                                                                 | Disabled    |
| SPA                  | Route non-existent files to /index.html                                                                                                                    | Disabled    |
| Basic Authentication | Authorize requests using Basic Authentication. Refer to [Basic Authentication](https://github.com/http-server-rs/http-server#basic-authentication)         | Disabled    |
| Logger               | Prints HTTP request and response details to stdout                                                                                                         | Disabled    |
