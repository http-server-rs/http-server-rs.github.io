---
title: Options
description: Options HTTP Server
sidebar_position: 10
---

# Options

Options receive a value and support default values as well.

```
http-server --host 127.0.0.1
```

| Name               | Short | Long                  | Description                                                                                                 | Default Value |
| ------------------ | ----- | --------------------- | ----------------------------------------------------------------------------------------------------------- | ------------- |
| Host               | `-h`  | `--host`              | Address to bind the server                                                                                  | `127.0.0.1`   |
| Port               | `-p`  | `--port`              | Port to bind the server                                                                                     | `7878`        |
| Configuration File | `-c`  | `--config`            | Configuration file. [Example](https://github.com/http-server-rs/http-server/blob/main/fixtures/config.toml) | N/A           |
| TLS                | N/A   | `--tls`               | Enable TLS for HTTPS connections. Requires a Certificate and Key. [Reference](#tls-reference)               | N/A           |
| TLS Certificate    | N/A   | `--tls-cert`          | Path to TLS certificate file. **Depends on `--tls`**                                                        | `cert.pem`    |
| TLS Key            | N/A   | `--tls-key`           | Path to TLS key file. **Depends on `--tls`**                                                                | `key.rsa`     |
| TLS Key Algorithm  | N/A   | `--tls-key-algorithm` | Algorithm used to generate certificate key. **Depends on `--tls`**                                          | `rsa`         |
| Username           | N/A   | `--username`          | Username to validate using basic authentication                                                             | N/A           |
| Password           | N/A   | `--password`          | Password to validate using basic authentication. **Depends on `--username`**                                | N/A           |
| Proxy              | N/A   | `--proxy`             | Proxy requests to the provided URL                                                                          | N/A           |