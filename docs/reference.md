---
title: Reference
description: Reference HTTP Server
sidebar_position: 10
---

## Reference

The following are some relevant details on features supported by this HTTP Server
that may be of interest to the user.

### Compression

Even though compression is supported, by default the server will not compress any
HTTP response contents.
You must specify the compression configuration you want to use, in the
configuration file or on the command line.

As of today the server only supports compression with the GZip algorithm, but
`brotli` support is also planned.

The following MIME types are never compressed:

- `application/gzip`
- `application/octet-stream`
- `application/wasm`
- `application/zip`
- `image/*`
- `video/*`

#### The Configuration File's Compression Section

As future support for other compression algorithms is planned,
the configuration file already supports compression settings.

```toml
[compression]
gzip = true
```

#### The `--gzip` flag

Provide the `--gzip` argument to the server when executing it.

```bash
http-server --gzip
```

### TLS (HTTPS)

The TLS solution supported for this HTTP Server is built with the [rustls](https://github.com/ctz/rustls)
crate along with [hyper-rustls](https://github.com/ctz/hyper-rustls).

When running with TLS support you will need:

- A certificate
- A matching RSA Private Key for the certificate

A script to generate certificates and keys is available here [tls-cert.sh](./docs/tls-cert.sh).
This script relies on `openssl`, so make sure you have it installed on your system.

Run `http-server` as follows:

```sh
http-server --tls --tls-cert <PATH TO YOUR CERTIFICATE> --tls-key <PATH TO YOUR KEY> --tls-key-algorithm pkcs8
```

### Cross-Origin Resource Sharing (CORS)

This HTTP Server supports CORS headers _out of the box_.
Based on the headers you want to provide in your HTTP Responses, two
different methods for CORS configuration are available.

By providing the `--cors` option to `http-server`, CORS headers
will be appended to every HTTP Response, allowing any origin.

For more complex configurations, like specifying an origin, a set of allowed
HTTP methods and more, you should specify the configuration via the configuration
TOML file.

The following example shows all the available options.

```toml
[cors]
allow_credentials = false
allow_headers = ["content-type", "authorization", "content-length"]
allow_methods = ["GET", "PATCH", "POST", "PUT", "DELETE"]
allow_origin = "example.com"
expose_headers = ["*", "authorization"]
max_age = 600
request_headers = ["x-app-version"]
request_method = "GET"
```

### Basic Authentication

Basic Authentication is supported to deny requests when credentials are invalid.
You must provide the allowed `username` and `password` either by using the CLI
options `--username` along with the desired username and `--password` along with
the desired password, or by specifying such values through the configuration
TOML file.

```toml
[basic_auth]
username = "John"
password = "Appleseed"
```

### Proxy

The HTTP Server is able to proxy requests to a specified URL.

When using the proxy, the FileExplorer won't be available, as the proxy is
an alternate _Request Handler_.

The config TOML file can be used to provide proxy configurations:

```toml
[proxy]
url = "https://example.com"
```