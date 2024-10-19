---
title: Request Handlers
description: Request Handlers HTTP Server
sidebar_position: 10
---

# Request Handlers

This HTTP Proxy supports different _Request Handlers_ which determine how each
incoming HTTP request is handled. They can't be combined, you must
choose one based on your needs.

- [File Server](#file-server-handler) _default_
- [Proxy](#proxy-handler)

### File Server Handler

Serves files from the provided directory. Navigation is scoped to the
specified directory. If no directory is provided the CWD will be used.

> This is the default behavior for the HTTP server.

### Proxy Handler

Proxies requests to the provided URL. The URL provided is used as the base URL
for incoming requests.
