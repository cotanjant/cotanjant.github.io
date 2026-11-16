---
title: "Separating app code from GitOps manifests"
description: "How showcase splits a Go backend repository from its Kubernetes, ArgoCD, and OpenTofu deployment config."
pubDate: 2026-10-17
tags: ["go", "kubernetes", "gitops"]
readingTime: "3 min"
repo: "https://github.com/cotanjant/showcase"
---

When a service and its Kubernetes manifests live in the same repository, every image tag bump triggers a commit back to the code history, which can loop CI workflows if you are not careful.

In [showcase](https://github.com/cotanjant/showcase) and [showcase-gitops](https://github.com/cotanjant/showcase-gitops), I split those concerns across two repositories.

## What stays in the application repo

The `showcase` repository holds the Go backend, its `Dockerfile`, environment examples, and the build pipeline. Pushing code compiles the binary, builds a container image, and publishes the artifact without touching cluster YAML.

Keeping the container small also avoids shipping compilers and build caches into runtime pods.

## What lives in the GitOps repo

`showcase-gitops` holds the Kubernetes manifests, ArgoCD application definitions, and OpenTofu infrastructure layout. ArgoCD watches that repository and reconciles cluster state whenever a manifest or image tag updates.

Separating the two means infrastructure changes and rollbacks show up as clean diffs in `showcase-gitops`, independent of Go source commits.
