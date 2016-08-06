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
  BOOL isLight = [object[@"currentTheme"] isEqualToString:@"light"] ;
  UIColor *barTintColor = isLight ? [UIColor colorWithRed:0/255 green:133/255.0 blue:255/255.0 alpha:1]: [UIColor colorWithRed:9/255.0 green:63/255.0 blue:118/255.0 alpha:1];
  
  
  [[UINavigationBar appearance] setBarTintColor:barTintColor];
  
  UIColor *titleColor = isLight? [UIColor whiteColor]: [UIColor blackColor];
  [[UINavigationBar appearance] setTitleTextAttributes:@{NSForegroundColorAttributeName: titleColor, NSFontAttributeName: [UIFont systemFontOfSize:14]}];
//  [[UINavigationBar appearance] setTintColor:titleColor];
  [self.bridge.eventDispatcher sendDeviceEventWithName:postNotificationName body:object];

}


 
@end
