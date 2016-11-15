# Simple kubernete cluster

## Start cluster
```sh
minikube start

kubectl create -f cluster-config.yaml
```

Service exposes port 31116 to accept request for 4 nodes in cluster. ExternalIp of service can be found by this command

```sh
kubectl cluster-info
```

## Stop cluster
```sh
kubectl delete service bootcamp

kubectl delete rc bootcamp

minikube stop
```
