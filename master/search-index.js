var searchIndex = JSON.parse('{\
"a2":{"doc":"A2A2 is an asynchronous client to Apple push notification…","i":[[3,"LocalizedNotificationBuilder","a2","A builder to create a localized APNs payload.",null,null],[3,"PlainNotificationBuilder","","A builder to create a simple APNs notification payload.",null,null],[3,"SilentNotificationBuilder","","A builder to create an APNs silent notification payload…",null,null],[3,"CollapseId","","",null,null],[12,"value","","",0,null],[3,"NotificationOptions","","Headers to specify options to the notification.",null,null],[12,"apns_id","","A canonical UUID that identifies the notification. If…",1,null],[12,"apns_expiration","","A UNIX epoch date expressed in seconds (UTC). This header…",1,null],[12,"apns_priority","","The priority of the notification. If `None`, the APNs…",1,null],[12,"apns_topic","","The topic of the remote notification, which is typically…",1,null],[12,"apns_collapse_id","","Multiple notifications with the same collapse identifier…",1,null],[4,"Priority","","The importance how fast to bring the notification for the…",null,null],[13,"High","","Send the push message immediately. Notifications with this…",2,null],[13,"Normal","","Send the push message at a time that takes into account…",2,null],[0,"request","","The request payload module",null,null],[0,"notification","a2::request","The `aps` notification content builders",null,null],[3,"LocalizedAlert","a2::request::notification","",null,null],[3,"LocalizedNotificationBuilder","","A builder to create a localized APNs payload.",null,null],[3,"PlainNotificationBuilder","","A builder to create a simple APNs notification payload.",null,null],[3,"SilentNotificationBuilder","","A builder to create an APNs silent notification payload…",null,null],[3,"CollapseId","","",null,null],[12,"value","","",0,null],[3,"NotificationOptions","","Headers to specify options to the notification.",null,null],[12,"apns_id","","A canonical UUID that identifies the notification. If…",1,null],[12,"apns_expiration","","A UNIX epoch date expressed in seconds (UTC). This header…",1,null],[12,"apns_priority","","The priority of the notification. If `None`, the APNs…",1,null],[12,"apns_topic","","The topic of the remote notification, which is typically…",1,null],[12,"apns_collapse_id","","Multiple notifications with the same collapse identifier…",1,null],[4,"Priority","","The importance how fast to bring the notification for the…",null,null],[13,"High","","Send the push message immediately. Notifications with this…",2,null],[13,"Normal","","Send the push message at a time that takes into account…",2,null],[11,"new","a2","Creates a new builder with the minimum amount of content.",3,[[],["localizednotificationbuilder",3]]],[11,"set_badge","","A number to show on a badge on top of the app icon.",3,[[]]],[11,"set_sound","","File name of the custom sound to play when receiving the…",3,[[]]],[11,"set_category","","When a notification includes the category key, the system…",3,[[]]],[11,"set_title_loc_key","","The localization key for the notification title.",3,[[]]],[11,"set_title_loc_args","","Arguments for the title localization.",3,[[]]],[11,"set_action_loc_key","","The localization key for the action.",3,[[]]],[11,"set_loc_key","","The localization key for the push message body.",3,[[]]],[11,"set_loc_args","","Arguments for the content localization.",3,[[]]],[11,"set_launch_image","","Image to display in the rich notification.",3,[[]]],[11,"set_mutable_content","","Allow client to modify push content before displaying.",3,[[]]],[11,"new","","Creates a new builder with the minimum amount of content.",4,[[],["plainnotificationbuilder",3]]],[11,"set_badge","","A number to show on a badge on top of the app icon.",4,[[]]],[11,"set_sound","","File name of the custom sound to play when receiving the…",4,[[]]],[11,"set_category","","When a notification includes the category key, the system…",4,[[]]],[11,"new","","Creates a new builder.",5,[[],["silentnotificationbuilder",3]]],[11,"new","","",0,[[],[["collapseid",3],["result",4],["error",4]]]],[8,"NotificationBuilder","a2::request::notification","",null,null],[10,"build","","Generates the request payload to be send with the `Client`.",6,[[["notificationoptions",3]],["payload",3]]],[0,"payload","a2::request","Payload with `aps` and custom data",null,null],[3,"Payload","a2::request::payload","The data and options for a push notification.",null,null],[12,"options","","Send options",7,null],[12,"device_token","","The token for the receiving device",7,null],[12,"aps","","The pre-defined notification payload",7,null],[12,"data","","Application specific payload",7,null],[3,"APS","","The pre-defined notification data.",null,null],[12,"alert","","The notification content. Can be empty for silent…",8,null],[12,"badge","","A number shown on top of the app icon.",8,null],[12,"sound","","The name of the sound file to play when user receives the…",8,null],[12,"content_available","","Set to one for silent notifications.",8,null],[12,"category","","When a notification includes the category key, the system…",8,null],[12,"mutable_content","","If set to one, the app can change the notification content…",8,null],[4,"APSAlert","","Different notification content types.",null,null],[13,"Plain","","Text-only notification.",9,null],[13,"Localized","","A rich localized notification.",9,null],[11,"add_custom_data","","Client-specific custom data to be added in the payload.…",7,[[["serialize",8]],[["result",4],["error",4]]]],[11,"to_json_string","","Combine the APS payload and the custom data to a final…",7,[[],[["string",3],["result",4],["error",4]]]],[0,"error","a2","Error and result module",null,null],[4,"Error","a2::error","",null,null],[13,"SerializeError","","User request or Apple response JSON data was faulty.",10,null],[13,"ConnectionError","","A problem connecting to APNs servers.",10,null],[13,"SignerError","","Couldn\'t generate an APNs token with the given key.",10,null],[13,"ResponseError","","APNs couldn\'t accept the notification. Contains Response…",10,null],[13,"InvalidOptions","","Invalid option values given in NotificationOptions",10,null],[13,"ReadError","","Error reading the certificate or private key.",10,null],[0,"response","a2","The APNs response types",null,null],[3,"Response","a2::response","The response data from APNs.",null,null],[12,"error","","If the notification was not successful, has the body…",11,null],[12,"apns_id","","Is the value defined in the `NotificationOptions` or a new…",11,null],[12,"code","","The HTTP response code.",11,null],[3,"ErrorBody","","The response body from APNs. Only available for errors.",null,null],[12,"reason","","The error indicating the reason for the failure.",12,null],[12,"timestamp","","If the value of the `ErrorReason` is `Unregistered`, the…",12,null],[4,"ErrorReason","","A description what went wrong with the push notification.",null,null],[13,"BadCollapseId","","The collapse identifier exceeds the maximum allowed size.",13,null],[13,"BadDeviceToken","","The specified device token was bad. Verify that the…",13,null],[13,"BadExpirationDate","","The `apns_expiration` in `NotificationOptions` is bad.",13,null],[13,"BadMessageId","","The `apns_id` in `NotificationOptions` is bad.",13,null],[13,"BadPriority","","The `apns_priority` in `NotificationOptions` is bad.",13,null],[13,"BadTopic","","The `apns_topic` in `NotificationOptions` is bad.",13,null],[13,"DeviceTokenNotForTopic","","The device token does not match the specified topic.",13,null],[13,"DuplicateHeaders","","One or more headers were repeated.",13,null],[13,"IdleTimeout","","Idle time out.",13,null],[13,"MissingDeviceToken","","The device token is not specified in the payload.",13,null],[13,"MissingTopic","","The `apns_topic` of the `NotificationOptions` was not…",13,null],[13,"PayloadEmpty","","The message payload was empty.",13,null],[13,"TopicDisallowed","","Pushing to this topic is not allowed.",13,null],[13,"BadCertificate","","The certificate was bad.",13,null],[13,"BadCertificateEnvironment","","The client certificate was for the wrong environment.",13,null],[13,"ExpiredProviderToken","","The provider token is stale and a new token should be…",13,null],[13,"Forbidden","","The specified action is not allowed.",13,null],[13,"InvalidProviderToken","","The provider token is not valid or the token signature…",13,null],[13,"MissingProviderToken","","No provider certificate was used to connect to APNs and…",13,null],[13,"BadPath","","The request path value is bad.",13,null],[13,"MethodNotAllowed","","The request method was not `POST`.",13,null],[13,"Unregistered","","The device token is inactive for the specified topic. You…",13,null],[13,"PayloadTooLarge","","The message payload was too large (4096 bytes)",13,null],[13,"TooManyProviderTokenUpdates","","The provider token is being updated too often.",13,null],[13,"TooManyRequests","","Too many requests were made consecutively to the same…",13,null],[13,"InternalServerError","","An internal server error occurred.",13,null],[13,"ServiceUnavailable","","The service is unavailable.",13,null],[13,"Shutdown","","The server is shutting down.",13,null],[0,"client","a2","The client module for sending requests and parsing responses",null,null],[3,"Client","a2::client","Handles requests to and responses from Apple Push…",null,null],[4,"Endpoint","","The APNs service endpoint to connect.",null,null],[13,"Production","","The production environment (api.push.apple.com)",14,null],[13,"Sandbox","","The development/test environment…",14,null],[11,"certificate","","Create a connection to APNs using the provider client…",15,[[["endpoint",4]],[["error",4],["client",3],["result",4]]]],[11,"token","","Create a connection to APNs using system certificates,…",15,[[["endpoint",4]],[["error",4],["client",3],["result",4]]]],[11,"send","","Send a notification payload.",15,[[["payload",3]]]],[11,"from","a2","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"to_string","","",2,[[],["string",3]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","a2::request::notification","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"erased_serialize","","",16,[[["serializer",8]],[["ok",3],["error",3],["result",4]]]],[11,"from","a2::request::payload","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"erased_serialize","","",8,[[["serializer",8]],[["ok",3],["error",3],["result",4]]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"erased_serialize","","",9,[[["serializer",8]],[["ok",3],["error",3],["result",4]]]],[11,"from","a2::error","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_string","","",10,[[],["string",3]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","a2::response","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_string","","",13,[[],["string",3]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","a2::client","",15,[[]]],[11,"into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"to_string","","",14,[[],["string",3]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"build","a2","",3,[[["notificationoptions",3]],["payload",3]]],[11,"build","","",4,[[["notificationoptions",3]],["payload",3]]],[11,"build","","",5,[[["notificationoptions",3]],["payload",3]]],[11,"from","a2::error","",10,[[["error",3]]]],[11,"from","","",10,[[["error",3]]]],[11,"from","","",10,[[["errorstack",3]]]],[11,"from","","",10,[[["error",3]]]],[11,"clone","a2::request::notification","",16,[[],["localizedalert",3]]],[11,"clone","a2","",0,[[],["collapseid",3]]],[11,"clone","","",1,[[],["notificationoptions",3]]],[11,"clone","","",2,[[],["priority",4]]],[11,"clone","a2::request::payload","",7,[[],["payload",3]]],[11,"clone","","",8,[[],["aps",3]]],[11,"clone","","",9,[[],["apsalert",4]]],[11,"clone","a2::client","",14,[[],["endpoint",4]]],[11,"default","a2","",1,[[],["notificationoptions",3]]],[11,"eq","a2::response","",12,[[["errorbody",3]]]],[11,"ne","","",12,[[["errorbody",3]]]],[11,"eq","","",13,[[["errorreason",4]]]],[11,"fmt","a2::request::notification","",16,[[["formatter",3]],["result",6]]],[11,"fmt","a2","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","a2::request::payload","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","a2::error","",10,[[["formatter",3]],["result",6]]],[11,"fmt","a2::response","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","a2::client","",14,[[["formatter",3]],["result",6]]],[11,"fmt","a2","",2,[[["formatter",3]],["result",6]]],[11,"fmt","a2::error","",10,[[["formatter",3]],["result",6]]],[11,"fmt","a2::response","",13,[[["formatter",3]],["result",6]]],[11,"fmt","a2::client","",14,[[["formatter",3]],["result",6]]],[11,"source","a2::error","",10,[[],[["error",8],["option",4]]]],[11,"serialize","a2::request::notification","",16,[[],["result",4]]],[11,"serialize","a2::request::payload","",8,[[],["result",4]]],[11,"serialize","","",9,[[],["result",4]]],[11,"deserialize","a2::response","",12,[[],["result",4]]],[11,"deserialize","","",13,[[],["result",4]]]],"p":[[3,"CollapseId"],[3,"NotificationOptions"],[4,"Priority"],[3,"LocalizedNotificationBuilder"],[3,"PlainNotificationBuilder"],[3,"SilentNotificationBuilder"],[8,"NotificationBuilder"],[3,"Payload"],[3,"APS"],[4,"APSAlert"],[4,"Error"],[3,"Response"],[3,"ErrorBody"],[4,"ErrorReason"],[4,"Endpoint"],[3,"Client"],[3,"LocalizedAlert"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);