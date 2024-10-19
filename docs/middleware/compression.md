---
title: Compression
description: Compression HTTP Server
sidebar_position: 1
---

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
