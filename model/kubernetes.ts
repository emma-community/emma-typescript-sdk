/**
 * Public EMMA API
 * ### About Infrastructure API  **Base URL:** **<u>https://api.emma.ms/external</u>**   This **Infrastructure API** is for managing the emma cloud infrastructure within a project. The API enables you to view, create, edit, and delete _Virtual machines, Spot instances, Applications, Kubernetes clusters, SSH keys, Security groups, and Backup policies_. For creating the resources you can use the endpoints with the dictionaries: _Data centers, Locations, Providers, Operating systems, Virtual machines configurations, Spot instances configurations, Kubernetes clusters configurations._   ### Authentication   #### 1. Create service application   To access the API, enter your project, navigate to **Settings** > **Service Apps**, and create a service application. Select the access level **Read**, **Operate**, or **Manage**.   - **Read** - only GET methods are allowed in the API.   - **Operate** - some operations are allowed with the resources (e.g. _Start, Reboot,_ and _Shutdown_ of the Virtual machines).   - **Manage** - full creating, updating, and deleting of the resources is allowed.    #### 2. Get access token   - Copy the **Client ID** and **Client Secret** in the service application.  - Send an API request to the endpoint **_/issue-token** as specified in the **Authentication** section of the API documentation. You will receive access and refresh tokens in the response.   _For Linux / Mac:_  ```  curl -X POST https://api.emma.ms/external/v1/issue-token \\  -H \"Content-Type: application/json\" \\  -d \'{\"clientId\": \"YOUR-CLIENT-ID\", \"clientSecret\": \"YOUR-CLIENT-SECRET\"}\'  ```  _For Windows:_  ```  curl -X POST https://api.emma.ms/external/v1/issue-token ^  -H \"Content-Type: application/json\" ^  -d \"{\\\"clientId\\\": \\\"YOUR-CLIENT-ID\\\", \\\"clientSecret\\\": \\\"YOUR-CLIENT-SECRET\\\"}\"  ```   #### 3. Use access token in requests  The Bearer access token is a text string, included in the request header, for example:   _For Linux / Mac:_  ```  curl -X GET https://api.emma.ms/external/v1/locations -H \"Authorization: Bearer YOUR-ACCESS-TOKEN-HERE\"  ```   Use this token for the API requests.    #### 4. Refresh token  The access token will expire in 10 minutes. A new access token may be created using the refresh token (without Client ID and Client Secret).   To get a new access token send a request to the **_/refresh-token** endpoint:    _For Linux / Mac:_  ```  curl -X POST https://api.emma.ms/external/v1/refresh-token \\  -H \"Content-Type: application/json\" \\  -d \'{\"refreshToken\": \"YOUR-REFRESH-TOKEN\"}\'  ```       ### Possible response status codes   We use standard HTTP response codes to show the success or failure of requests.   `2xx` - successful responses.   `4xx` - client error responses (the response contains an explanation of the error).   `5xx` - server error responses.   The API uses the following status codes:   | Status Code | Description                  | Notes                                                                  |  |-------------|------------------------------|------------------------------------------------------------------------|  | 200         | OK                           | The request was successful.                                             |  | 201         | Created                      | The object was successfully created. This code is only used with objects that are created immediately.  | 204         | No content                   | A successful request, but there is no additional information to send back in the response body (in a case when the object was deleted).    | 400         | Bad Request                  | The request could not be understood by the server. Incoming parameters might not be valid. |  | 401         | Unauthorized            | The client is unauthenticated. The client must authenticate itself to get the requested response. |  | 403         | Forbidden                   | The client does not have access rights to the content.  | 404         | Not Found                    | The requested resource is not found.                                    |  | 409         | Conflict | This response is sent when a request conflicts with the current state of the object (e.g. deleting the security group with the compute instances in it).|  | 422         | Unprocessable Content   | The request was well-formed but was unable to be followed due to incorrect field values (e.g. creation of a virtual machine in the non-existent data center).  |  | 500         | Internal server Error                 | The server could not return the representation due to an internal server error. | 
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { KubernetesAutoscalingConfigsInner } from './kubernetesAutoscalingConfigsInner';
import { KubernetesCost } from './kubernetesCost';
import { KubernetesNodeGroupsInner } from './kubernetesNodeGroupsInner';

export class Kubernetes {
    /**
    * ID of the Kubernetes cluster
    */
    'id'?: number;
    /**
    * Date and time of the Kubernetes cluster creation
    */
    'createdAt'?: string;
    /**
    * Name of the user who created the Kubernetes cluster
    */
    'createdByName'?: string;
    /**
    * ID of the user who created the Kubernetes cluster
    */
    'createdById'?: number;
    /**
    * Date and time when the Kubernetes cluster was last edited
    */
    'modifiedAt'?: string;
    /**
    * Name of the user who last edited the Kubernetes cluster
    */
    'modifiedByName'?: string;
    /**
    * ID of the user who last edited the Kubernetes cluster
    */
    'modifiedById'?: number;
    /**
    * Name of the Kubernetes cluster
    */
    'name'?: string;
    /**
    * Version of the Kubernetes cluster
    */
    'version'?: string;
    /**
    * Deployment region of the Kubernetes cluster. Currently, only Europe (eu) is available.
    */
    'deploymentLocation'?: Kubernetes.DeploymentLocationEnum;
    /**
    * Status of the Kubernetes cluster
    */
    'status'?: string;
    'cost'?: KubernetesCost;
    /**
    * Control Plane Status. The Control Plane status provides information about the health and functionality of various components that are part of the Control Plane.
    */
    'controlPlaneStatus'?: string;
    /**
    * Domain attached to the Kubernetes cluster
    */
    'domainName'?: string;
    /**
    * List of the worker node groups
    */
    'nodeGroups'?: Array<KubernetesNodeGroupsInner>;
    /**
    * Configurations of the autoscaling group
    */
    'autoscalingConfigs'?: Array<KubernetesAutoscalingConfigsInner>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string"
        },
        {
            "name": "createdByName",
            "baseName": "createdByName",
            "type": "string"
        },
        {
            "name": "createdById",
            "baseName": "createdById",
            "type": "number"
        },
        {
            "name": "modifiedAt",
            "baseName": "modifiedAt",
            "type": "string"
        },
        {
            "name": "modifiedByName",
            "baseName": "modifiedByName",
            "type": "string"
        },
        {
            "name": "modifiedById",
            "baseName": "modifiedById",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        },
        {
            "name": "deploymentLocation",
            "baseName": "deploymentLocation",
            "type": "Kubernetes.DeploymentLocationEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "KubernetesCost"
        },
        {
            "name": "controlPlaneStatus",
            "baseName": "controlPlaneStatus",
            "type": "string"
        },
        {
            "name": "domainName",
            "baseName": "domainName",
            "type": "string"
        },
        {
            "name": "nodeGroups",
            "baseName": "nodeGroups",
            "type": "Array<KubernetesNodeGroupsInner>"
        },
        {
            "name": "autoscalingConfigs",
            "baseName": "autoscalingConfigs",
            "type": "Array<KubernetesAutoscalingConfigsInner>"
        }    ];

    static getAttributeTypeMap() {
        return Kubernetes.attributeTypeMap;
    }
}

export namespace Kubernetes {
    export enum DeploymentLocationEnum {
        Eu = <any> 'eu'
    }
}
