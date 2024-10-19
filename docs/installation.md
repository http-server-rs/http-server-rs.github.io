---
title: Installation
description: Installation HTTP Server
sidebar_position: 10
---

# Installation 

```bash
cargo install http-server
```

Verify successful installation.

```bash
http-server --help
```


Expect the following output:

```
USAGE:
    http-server [FLAGS] [OPTIONS] [root-dir]

FLAGS:
        --cors                 Enable Cross-Origin Resource Sharing allowing any origin
        --graceful-shutdown    Waits for all requests to fulfill before shutting down the server
        --gzip                 Enable GZip compression for HTTP Responses
        --help                 Prints help information
    -l, --logger               Prints HTTP request and response details to stdout
    -q, --quiet                Turns off stdout/stderr logging
        --spa                  Route non-existent files to /index.html
        --tls                  Enables HTTPS serving using TLS
    -i, --index            Route directories to index.html if present
    -V, --version              Prints version information

OPTIONS:
    -c, --config <config>                          Path to TOML configuration file
    -h, --host <host>                              Host (IP) to bind the server [default: 127.0.0.1]
        --password <password>                      Specifies password for basic authentication
    -p, --port <port>                              Port to bind the server [default: 7878]
        --proxy <proxy>                            Proxy requests to the provided URL
        --tls-cert <tls-cert>                      Path to the TLS Certificate [default: cert.pem]
        --tls-key <tls-key>                        Path to the TLS Key [default: key.rsa]
        --tls-key-algorithm <tls-key-algorithm>    Algorithm used to generate certificate key [default: rsa]
        --username <username>                      Specifies username for basic authentication

ARGS:
    <root-dir>    Directory to serve files from [default: ./]
```

> If you find this output is out of date, don't hesitate to open a [PR here][1].
