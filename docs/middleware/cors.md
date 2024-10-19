---
title: CORS
description: Installation HTTP Server
sidebar_position: 3
---

# Cross-Origin Resource Sharing (CORS) 

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