//
//  RNBadgesModule.swift
//  RNBadgesModule
//
//  Copyright © 2022 Shoyeb Memon. All rights reserved.
//

import Foundation

@objc(RNBadgesModule)
class RNBadgesModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
