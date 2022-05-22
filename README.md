
```sh
# https://medium.com/swlh/how-to-run-locally-built-docker-images-in-kubernetes-b28fbc32cc1d
minikube docker-env
eval $(minikube -p minikube docker-env)
# rebuild after

yarn docker:build
kubectl create -f deploy.yml
kubectl expose deployment landing-deployment --type="LoadBalancer"
kubectl get svc
```