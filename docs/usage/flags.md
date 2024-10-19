---
title: Flags
description: Flags HTTP Server
sidebar_position: 1
---

# Flags

Flags are provided without any values. For example:

```
http-server --help
```

| Name                          | Short | Long                  | Description                                                           |
| ----------------------------- | ----- | --------------------- | --------------------------------------------------------------------- |
| Cross-Origin Resource Sharing | N/A   | `--cors`              | Enable Cross-Origin Resource Sharing allowing any origin              |
| GZip Compression              | N/A   | `--gzip`              | Enable GZip compression for responses                                 |
| Graceful Shutdown             | N/A   | `--graceful-shutdown` | Wait for all requests to be fulfilled before shutting down the server |
| Help                          | N/A   | `--help`              | Print help information                                                |
| Logger                        | `-l`  | `--logger`            | Print HTTP request and response details to stdout                     |
| Version                       | `-V`  | `--version`           | Print version information                                             |
| Quiet                         | `-q`  | `--quiet`             | Don't print output to console                                         |
| Index                         | `-i`  | `--index`             | Route directories to index.html if present                            |
| SPA                           | N/A   | `--spa`               | Route non-existent files to /index.html                               |
