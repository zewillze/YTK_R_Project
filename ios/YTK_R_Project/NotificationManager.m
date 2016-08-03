//
//  NotificationManager.m
//  YTK_R_Project
//
//  Created by zeze on 16/8/3.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "NotificationManager.h"
#import "RCTBridge.h"
#import "RCTEventDispatcher.h"
#import "RCTLog.h"


@implementation NotificationManager
@synthesize bridge = _bridge;



RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(postNotification:(NSString *)postNotificationName object:(NSDictionary*) object){
  RCTLogInfo(@"Pretending to create an event %@ at %@", postNotificationName, object);
  [self.bridge.eventDispatcher sendDeviceEventWithName:postNotificationName body:object];
  NSLog(@"self.br %@", self.bridge.eventDispatcher);
  
}




@end
