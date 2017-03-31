# demo-k8s

# Before Start
* Install `Docker`
* Install `kubectrl`
* Install `minikube` if you want to run in local

## Get Started
Fork this repo and change it.
```
# View which k8s cluster connected with
kubectl config current-context 

# Edit `name` in demo-k8s-namespace.yml and Create your namespace
kubectrl apply -f demo-k8s-namespace.yml

# If u want use your namespace rather than default
kubectl config set-context $(kubectl config current-context) --namespace=<your namespace>

# Deploy to K8s
kubectrl apply -f demo-k8s.yml
```

## Intro

In this repo we covered four of k8s
- Secret
    - Intended to hold sensitive information
- ConfigMap
    - ConfigMap API resource holds key-value pairs of configuration data that can be consumed in pods or used to store configuration data for system components such as controllers.
- Deployment
    - A Deployment provides declarative updates for Pods and Replica Sets.
- Service

# Tutorial

### 1. Build image
```
docker build -t demo-k8s .
```

#### Test the image

```
docker run -p 8080:8080 -ti --rm demo-k8s
```

### 2. Push to the registry 

```
# Add the tag to your image:
docker tag demo-k8s gcr.io/<your-project-id>/demo-k8s

# Use the gcloud command-line tool to push the image to the Google Container Engine Registry:
gcloud docker -- push gcr.io/<your-project-id>/demo-k8s
```


### 3. Update application
```
# Here are two `demo-k8s`, one is metadata.name and one is spec.template.spec.containers in the `Deployment`.
# you need to set the different tag to the image, otherwise it wont update

kubectl set image deployment/demo-k8s demo-k8s=gcr.io/<your-project-id>/demo-k8s
```

### 4. Scale
```
# Scale UP
kubectl scale deployment demo-k8s --replicas 10

# Scale Down
kubectl scale deployment demo-k8s --replicas 1
```