/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  wdcloudgrowthconversion: {
    options: {
      java_multiple_files: true,
      java_package: "com.szwdcloud.wdcloudgrowthconversion.proto.wdcloudgrowthconversion",
      java_outer_classname: "ConversionServiceProto"
    },
    nested: {
      ConversionService: {
        methods: {
          getExpenseInfo: {
            requestType: "RequestGetExpenseInfo",
            responseType: "ResponseGetExpenseInfo"
          },
          getExpenseCount: {
            requestType: "RequestGetExpenseCount",
            responseType: "ResponseGetExpenseCount"
          },
          appListWithdrawByCondition: {
            requestType: "RequestListWithdrawByCondition",
            responseType: "WithdrawAppBatchDataPage"
          },
          listWithdrawByCondition: {
            requestType: "RequestListWithdrawByCondition",
            responseType: "WithdrawBatchDataPage"
          },
          initSaveWithdraw: {
            requestType: "google.protobuf.Empty",
            responseType: "ResponseInitSaveWithdraw"
          },
          saveWithdraw: {
            requestType: "RequestSaveWithdraw",
            responseType: "Response"
          },
          updateWithdraw: {
            requestType: "RequestUpdateWithdraw",
            responseType: "Response"
          },
          appListConversionInfoByCondition: {
            requestType: "RequestListConversionInfoByCondition",
            responseType: "ConversionAppBatchDataPage"
          },
          exportConversionInfoByCondition: {
            requestType: "RequestListConversionInfoByCondition",
            responseType: "ExportConversionBatchData"
          },
          listCurrencyInfoByCondition: {
            requestType: "RequestListCurrencyInfoByCondition",
            responseType: "CurrencyInfoBatchDataPage"
          },
          listConversionInfoByCondition: {
            requestType: "RequestListConversionInfoByCondition",
            responseType: "ConversionBatchDataPage"
          },
          saveConversionInfo: {
            requestType: "RequestSaveConversionInfo",
            responseType: "Response"
          },
          updateConversionInfo: {
            requestType: "RequestUpdateConversionInfo",
            responseType: "Response"
          }
        }
      },
      WithdrawView: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          withdrawNo: {
            type: "string",
            id: 2
          },
          amountId: {
            type: "int32",
            id: 3
          },
          amountIdName: {
            type: "string",
            id: 4
          },
          goodsName: {
            type: "string",
            id: 5
          },
          withdrawUCoin: {
            type: "int32",
            id: 6
          },
          goodsTotal: {
            type: "int32",
            id: 7
          },
          goodsLogo: {
            type: "string",
            id: 8
          },
          starLimit: {
            type: "int32",
            id: 9
          },
          starLimitName: {
            type: "string",
            id: 10
          },
          dateLimit: {
            type: "int32",
            id: 11
          },
          timesLimit: {
            type: "int32",
            id: 12
          },
          timesLimitName: {
            type: "string",
            id: 13
          },
          dataStatus: {
            type: "int32",
            id: 14
          },
          creater: {
            type: "string",
            id: 15
          },
          createTime: {
            type: "string",
            id: 16
          },
          updateTime: {
            type: "string",
            id: 17
          },
          soldoutTime: {
            type: "string",
            id: 18
          },
          comment: {
            type: "string",
            id: 19
          },
          withdrawInventoryTotal: {
            type: "int32",
            id: 20
          },
          goodsStateName: {
            type: "string",
            id: 21
          },
          soldTotal: {
            type: "int32",
            id: 22
          },
          errorInfo: {
            type: "string",
            id: 23
          }
        }
      },
      WithdrawAppView: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          withdrawNo: {
            type: "string",
            id: 2
          },
          amountId: {
            type: "int32",
            id: 3
          },
          amountIdName: {
            type: "string",
            id: 4
          },
          goodsName: {
            type: "string",
            id: 5
          },
          withdrawUCoin: {
            type: "int32",
            id: 6
          },
          goodsTotal: {
            type: "int32",
            id: 7
          },
          goodsLogo: {
            type: "string",
            id: 8
          },
          starLimitName: {
            type: "string",
            id: 9
          },
          dateLimitName: {
            type: "string",
            id: 10
          },
          timesLimitName: {
            type: "string",
            id: 11
          },
          dataStatus: {
            type: "int32",
            id: 12
          },
          createTime: {
            type: "string",
            id: 13
          },
          updateTime: {
            type: "string",
            id: 14
          },
          soldoutTime: {
            type: "string",
            id: 15
          },
          comment: {
            type: "string",
            id: 16
          },
          withdrawInventoryTotal: {
            type: "int32",
            id: 17
          },
          goodsStateName: {
            type: "string",
            id: 18
          },
          errorInfo: {
            type: "string",
            id: 19
          }
        }
      },
      Withdraw: {
        fields: {
          amountId: {
            type: "int32",
            id: 1
          },
          goodsName: {
            type: "string",
            id: 2
          },
          withdrawUCoin: {
            type: "int32",
            id: 3
          },
          goodsTotal: {
            type: "int32",
            id: 4
          },
          goodsLogo: {
            type: "string",
            id: 5
          },
          starLimit: {
            type: "int32",
            id: 6
          },
          dateLimit: {
            type: "int32",
            id: 7
          },
          creater: {
            type: "string",
            id: 8
          },
          createTime: {
            type: "string",
            id: 9
          },
          updateTime: {
            type: "string",
            id: 10
          },
          comment: {
            type: "string",
            id: 11
          },
          withdrawNo: {
            type: "string",
            id: 12
          },
          dataStatus: {
            type: "int32",
            id: 13
          }
        }
      },
      WithdrawBatchData: {
        fields: {
          soldOnGoodsTotal: {
            type: "int32",
            id: 1
          },
          withdrawView: {
            rule: "repeated",
            type: "WithdrawView",
            id: 2
          }
        }
      },
      WithdrawAppBatchData: {
        fields: {
          conversionNum: {
            type: "int32",
            id: 1
          },
          remainWithdrawNum: {
            type: "int32",
            id: 2
          },
          withdrawDesc: {
            type: "string",
            id: 3
          },
          withdrawView: {
            rule: "repeated",
            type: "WithdrawView",
            id: 4
          }
        }
      },
      ConversionInfoView: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          appUserId: {
            type: "string",
            id: 2
          },
          userName: {
            type: "string",
            id: 3
          },
          createTime: {
            type: "string",
            id: 4
          },
          updateTime: {
            type: "string",
            id: 5
          },
          applyAmount: {
            type: "int32",
            id: 6
          },
          userBankInfo: {
            rule: "repeated",
            type: "UserBankInfo",
            id: 7
          },
          deductUCoin: {
            type: "int32",
            id: 8
          },
          registeredDays: {
            type: "int32",
            id: 9
          },
          registeredDaysName: {
            type: "string",
            id: 10
          },
          schoolId: {
            type: "int64",
            id: 11
          },
          schoolName: {
            type: "string",
            id: 12
          },
          operateState: {
            type: "int32",
            id: 13
          },
          operateStateName: {
            type: "string",
            id: 14
          },
          comment: {
            type: "string",
            id: 15
          },
          confirmTime: {
            type: "string",
            id: 16
          },
          finalTime: {
            type: "string",
            id: 17
          },
          userMobile: {
            type: "string",
            id: 18
          },
          billsUrl: {
            type: "string",
            id: 19
          }
        }
      },
      ConversionBatchData: {
        fields: {
          pendingApply: {
            type: "int32",
            id: 1
          },
          pendingAmount: {
            type: "int32",
            id: 2
          },
          currentSearchAmount: {
            type: "int32",
            id: 3
          },
          conversionInfoView: {
            rule: "repeated",
            type: "ConversionInfoView",
            id: 4
          }
        }
      },
      ConversionInfo: {
        fields: {
          appUserId: {
            type: "string",
            id: 1
          },
          withdrawNo: {
            type: "string",
            id: 2
          },
          userBankInfo: {
            type: "UserBankInfo",
            id: 3
          },
          schoolId: {
            type: "int64",
            id: 4
          },
          comment: {
            type: "string",
            id: 5
          },
          userStarLevel: {
            type: "int32",
            id: 6
          },
          createTime: {
            type: "string",
            id: 9
          },
          updateTime: {
            type: "string",
            id: 10
          },
          confirmTime: {
            type: "string",
            id: 11
          },
          finalTime: {
            type: "string",
            id: 12
          },
          verifiCode: {
            type: "string",
            id: 13
          },
          id: {
            type: "string",
            id: 14
          },
          operateState: {
            type: "int32",
            id: 15
          },
          billsUrl: {
            type: "string",
            id: 16
          }
        }
      },
      UserTaskLogInfo: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          userId: {
            type: "string",
            id: 2
          },
          schoolId: {
            type: "string",
            id: 3
          },
          teacherId: {
            type: "string",
            id: 4
          },
          taskId: {
            type: "int32",
            id: 5
          },
          taskContent: {
            type: "string",
            id: 6
          },
          commonId: {
            type: "string",
            id: 7
          },
          originalCurrency: {
            type: "int32",
            id: 8
          },
          originalExp: {
            type: "int32",
            id: 9
          },
          obtainExp: {
            type: "int32",
            id: 10
          },
          obtainCurrency: {
            type: "int32",
            id: 11
          },
          completeTime: {
            type: "string",
            id: 12
          },
          createTime: {
            type: "string",
            id: 13
          },
          recordType: {
            type: "int32",
            id: 14
          },
          recordComment: {
            type: "string",
            id: 15
          }
        }
      },
      CurrencyInfoBatchData: {
        fields: {
          appUserId: {
            type: "string",
            id: 1
          },
          userMobile: {
            type: "string",
            id: 2
          },
          userName: {
            type: "string",
            id: 3
          },
          totalCurrency: {
            type: "int32",
            id: 4
          },
          userTaskLogInfo: {
            rule: "repeated",
            type: "UserTaskLogInfo",
            id: 5
          }
        }
      },
      UserBankInfo: {
        fields: {
          appUserId: {
            type: "string",
            id: 1
          },
          bankName: {
            type: "string",
            id: 2
          },
          userName: {
            type: "string",
            id: 3
          },
          bankCardId: {
            type: "string",
            id: 4
          }
        }
      },
      CommonConfigInfo: {
        fields: {
          typeId: {
            type: "int32",
            id: 1
          },
          typeName: {
            type: "string",
            id: 2
          },
          a: {
            type: "string",
            id: 3
          }
        }
      },
      InitSaveWithdraw: {
        fields: {
          applyAmount: {
            rule: "repeated",
            type: "CommonConfigInfo",
            id: 1
          },
          starLimit: {
            rule: "repeated",
            type: "CommonConfigInfo",
            id: 2
          }
        }
      },
      RequestListWithdrawByCondition: {
        fields: {
          page: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          goodsName: {
            type: "string",
            id: 3
          },
          startTime: {
            type: "string",
            id: 4
          },
          endTime: {
            type: "string",
            id: 5
          },
          goodsState: {
            type: "int32",
            id: 6
          },
          appUserId: {
            type: "string",
            id: 7
          },
          userStarLevel: {
            type: "int32",
            id: 8
          }
        }
      },
      RequestInitSaveWithdraw: {
        fields: {}
      },
      RequestSaveWithdraw: {
        fields: {
          withdraw: {
            type: "Withdraw",
            id: 1
          }
        }
      },
      RequestUpdateWithdraw: {
        fields: {
          withdraw: {
            type: "Withdraw",
            id: 1
          }
        }
      },
      RequestListConversionInfoByCondition: {
        fields: {
          page: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          userName: {
            type: "string",
            id: 3
          },
          startTime: {
            type: "string",
            id: 4
          },
          endTime: {
            type: "string",
            id: 5
          },
          operateState: {
            type: "int32",
            id: 6
          },
          appUserId: {
            type: "string",
            id: 7
          },
          requestCategory: {
            type: "int32",
            id: 8
          }
        }
      },
      RequestListCurrencyInfoByCondition: {
        fields: {
          page: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          startTime: {
            type: "string",
            id: 3
          },
          endTime: {
            type: "string",
            id: 4
          },
          appUserId: {
            type: "string",
            id: 5
          },
          schoolId: {
            type: "int64",
            id: 6
          },
          withdrawNo: {
            type: "string",
            id: 7
          },
          conversionInfoNo: {
            type: "string",
            id: 8
          }
        }
      },
      RequestSaveConversionInfo: {
        fields: {
          conversionInfo: {
            type: "ConversionInfo",
            id: 1
          }
        }
      },
      RequestUpdateConversionInfo: {
        fields: {
          conversionInfo: {
            type: "ConversionInfo",
            id: 1
          }
        }
      },
      RequestGetExpenseInfo: {
        fields: {
          appUserId: {
            type: "string",
            id: 1
          },
          startTime: {
            type: "string",
            id: 2
          },
          endTime: {
            type: "string",
            id: 3
          }
        }
      },
      RequestGetExpenseCount: {
        fields: {
          appUserId: {
            type: "string",
            id: 1
          },
          startTime: {
            type: "string",
            id: 2
          },
          endTime: {
            type: "string",
            id: 3
          }
        }
      },
      ResponseGetExpenseInfo: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          currentTime: {
            type: "string",
            id: 2
          },
          message: {
            type: "string",
            id: 3
          },
          data: {
            rule: "repeated",
            type: "Data",
            id: 4
          }
        },
        nested: {
          Data: {
            fields: {
              createTime: {
                type: "string",
                id: 1
              },
              content: {
                type: "string",
                id: 2
              },
              deductCurrency: {
                type: "int32",
                id: 3
              },
              deduct: {
                type: "int32",
                id: 4
              },
              withdrawNum: {
                type: "int32",
                id: 5
              },
              week: {
                type: "string",
                id: 6
              },
              completeTime: {
                type: "string",
                id: 7
              }
            }
          }
        }
      },
      ResponseGetExpenseCount: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          currentTime: {
            type: "string",
            id: 2
          },
          message: {
            type: "string",
            id: 3
          },
          data: {
            rule: "repeated",
            type: "Data",
            id: 4
          }
        },
        nested: {
          Data: {
            fields: {
              week: {
                type: "string",
                id: 1
              },
              deductCurrency: {
                type: "int32",
                id: 2
              }
            }
          }
        }
      },
      ResponseInitSaveWithdraw: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          currentTime: {
            type: "string",
            id: 2
          },
          message: {
            type: "string",
            id: 3
          },
          data: {
            type: "Data",
            id: 4
          }
        },
        nested: {
          Data: {
            fields: {
              initSaveWithdraw: {
                type: "InitSaveWithdraw",
                id: 1
              }
            }
          }
        }
      },
      ExportConversionBatchData: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          currentTime: {
            type: "string",
            id: 2
          },
          message: {
            type: "string",
            id: 3
          },
          data: {
            type: "Data",
            id: 4
          }
        },
        nested: {
          Data: {
            fields: {
              fileBytes: {
                type: "bytes",
                id: 1
              }
            }
          }
        }
      },
      WithdrawAppBatchDataPage: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          currentTime: {
            type: "string",
            id: 2
          },
          message: {
            type: "string",
            id: 3
          },
          data: {
            type: "Data",
            id: 4
          }
        },
        nested: {
          Data: {
            fields: {
              page: {
                type: "int32",
                id: 1
              },
              pageSize: {
                type: "int32",
                id: 2
              },
              totalPage: {
                type: "int32",
                id: 3
              },
              totalRecords: {
                type: "int64",
                id: 4
              },
              row: {
                type: "WithdrawAppBatchData",
                id: 5
              }
            }
          }
        }
      },
      WithdrawBatchDataPage: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          currentTime: {
            type: "string",
            id: 2
          },
          message: {
            type: "string",
            id: 3
          },
          data: {
            type: "Data",
            id: 4
          }
        },
        nested: {
          Data: {
            fields: {
              page: {
                type: "int32",
                id: 1
              },
              pageSize: {
                type: "int32",
                id: 2
              },
              totalPage: {
                type: "int32",
                id: 3
              },
              totalRecords: {
                type: "int64",
                id: 4
              },
              row: {
                type: "WithdrawBatchData",
                id: 5
              }
            }
          }
        }
      },
      CurrencyInfoBatchDataPage: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          currentTime: {
            type: "string",
            id: 2
          },
          message: {
            type: "string",
            id: 3
          },
          data: {
            type: "Data",
            id: 4
          }
        },
        nested: {
          Data: {
            fields: {
              page: {
                type: "int32",
                id: 1
              },
              pageSize: {
                type: "int32",
                id: 2
              },
              totalPage: {
                type: "int32",
                id: 3
              },
              totalRecords: {
                type: "int64",
                id: 4
              },
              row: {
                type: "CurrencyInfoBatchData",
                id: 5
              }
            }
          }
        }
      },
      ConversionBatchDataPage: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          currentTime: {
            type: "string",
            id: 2
          },
          message: {
            type: "string",
            id: 3
          },
          data: {
            type: "Data",
            id: 4
          }
        },
        nested: {
          Data: {
            fields: {
              page: {
                type: "int32",
                id: 1
              },
              pageSize: {
                type: "int32",
                id: 2
              },
              totalPage: {
                type: "int32",
                id: 3
              },
              totalRecords: {
                type: "int64",
                id: 4
              },
              row: {
                type: "ConversionBatchData",
                id: 5
              }
            }
          }
        }
      },
      ConversionAppBatchDataPage: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          currentTime: {
            type: "string",
            id: 2
          },
          message: {
            type: "string",
            id: 3
          },
          data: {
            type: "Data",
            id: 4
          }
        },
        nested: {
          Data: {
            fields: {
              page: {
                type: "int32",
                id: 1
              },
              pageSize: {
                type: "int32",
                id: 2
              },
              totalPage: {
                type: "int32",
                id: 3
              },
              totalRecords: {
                type: "int64",
                id: 4
              },
              row: {
                rule: "repeated",
                type: "ConversionInfoView",
                id: 5
              }
            }
          }
        }
      },
      Response: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          currentTime: {
            type: "string",
            id: 2
          },
          message: {
            type: "string",
            id: 3
          },
          data: {
            type: "string",
            id: 4
          }
        }
      }
    }
  },
  platformserver: {
    options: {
      java_multiple_files: true,
      java_package: "com.szwdcloud.platformserver.proto.platformserver",
      java_outer_classname: "ServerCommonMessageProto"
    },
    nested: {
      ServerRoleService: {
        methods: {
          save: {
            requestType: "RoleSaveRequest",
            responseType: "Response"
          },
          update: {
            requestType: "RoleUpdateRequest",
            responseType: "Response"
          },
          "delete": {
            requestType: "RoleDeleteRequest",
            responseType: "Response"
          },
          findAllRoles: {
            requestType: "FindAllRolesRequest",
            responseType: "Response"
          },
          queryRoles: {
            requestType: "RolesQueryRequest",
            responseType: "Response"
          },
          queryUserRelaRoles: {
            requestType: "UserRelaRoleQueryRequest",
            responseType: "Response"
          },
          findOne: {
            requestType: "google.protobuf.StringValue",
            responseType: "Response"
          }
        }
      },
      RoleSaveRequest: {
        fields: {
          name: {
            type: "string",
            id: 1
          },
          type: {
            type: "int32",
            id: 2
          },
          privilegeId: {
            rule: "repeated",
            type: "string",
            id: 3
          },
          roleCategory: {
            type: "int32",
            id: 4
          }
        }
      },
      RoleUpdateRequest: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          type: {
            type: "int32",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          },
          privilegeId: {
            rule: "repeated",
            type: "string",
            id: 4
          },
          roleCategory: {
            type: "int32",
            id: 5
          }
        }
      },
      RoleDeleteRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      RoleSearchRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          type: {
            type: "int32",
            id: 3
          }
        }
      },
      FindAllRolesRequest: {
        fields: {
          type: {
            type: "int32",
            id: 1
          },
          roleCategory: {
            type: "int32",
            id: 2
          },
          customerType: {
            type: "int32",
            id: 3
          }
        }
      },
      FindAllRolesResult: {
        fields: {
          role: {
            rule: "repeated",
            type: "Role",
            id: 1
          }
        },
        nested: {
          Role: {
            fields: {
              id: {
                type: "int32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              type: {
                type: "int32",
                id: 3
              },
              roleCategory: {
                type: "int32",
                id: 6
              },
              createTime: {
                type: "google.protobuf.Timestamp",
                id: 4
              },
              updateTime: {
                type: "google.protobuf.Timestamp",
                id: 5
              }
            }
          }
        }
      },
      RolesQueryRequest: {
        fields: {
          roleId: {
            type: "int32",
            id: 1
          },
          privilegeId: {
            type: "string",
            id: 2
          },
          type: {
            type: "int32",
            id: 3
          },
          pageNo: {
            type: "int32",
            id: 4
          },
          pageSize: {
            type: "int32",
            id: 5
          },
          roleCategory: {
            type: "int32",
            id: 6
          }
        }
      },
      RoleQueryResult: {
        fields: {
          role: {
            rule: "repeated",
            type: "Role",
            id: 1
          },
          total: {
            type: "int64",
            id: 2
          },
          pages: {
            type: "int32",
            id: 3
          },
          pageNo: {
            type: "int32",
            id: 4
          },
          pageSize: {
            type: "int32",
            id: 5
          }
        },
        nested: {
          Role: {
            fields: {
              id: {
                type: "int32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              systemId: {
                type: "int32",
                id: 6
              },
              createTime: {
                type: "google.protobuf.Timestamp",
                id: 3
              },
              privilegeName: {
                rule: "repeated",
                type: "string",
                id: 4
              },
              privilegeId: {
                rule: "repeated",
                type: "string",
                id: 5
              },
              roleCategory: {
                type: "int32",
                id: 7
              }
            }
          }
        }
      },
      UserRelaRole: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          userId: {
            type: "string",
            id: 2
          },
          roleId: {
            type: "int32",
            id: 3
          },
          customerId: {
            type: "int64",
            id: 4
          },
          dataStatus: {
            type: "int32",
            id: 5
          }
        }
      },
      UserRelaRoleQueryRequest: {
        fields: {
          userId: {
            rule: "repeated",
            type: "string",
            id: 1
          },
          roleId: {
            type: "int32",
            id: 2
          },
          customerId: {
            rule: "repeated",
            type: "int64",
            id: 3
          }
        }
      },
      UserRelaRoleQueryResult: {
        fields: {
          userRelaRole: {
            rule: "repeated",
            type: "UserRelaRole",
            id: 1
          }
        }
      },
      FindOneRoleResult: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          type: {
            type: "int32",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          },
          roleCategory: {
            type: "int32",
            id: 5
          },
          privilege: {
            rule: "repeated",
            type: "Privilege",
            id: 4
          }
        },
        nested: {
          Privilege: {
            fields: {
              code: {
                type: "string",
                id: 2
              },
              name: {
                type: "string",
                id: 3
              },
              type: {
                type: "int32",
                id: 4
              },
              url: {
                type: "string",
                id: 5
              },
              parentId: {
                type: "string",
                id: 6
              }
            }
          }
        }
      },
      ServerBatchDataPage: {
        fields: {
          page: {
            type: "int32",
            id: 1
          },
          pagesize: {
            type: "int32",
            id: 2
          },
          offset: {
            type: "int32",
            id: 3
          },
          totalRecords: {
            type: "float",
            id: 4
          },
          rows: {
            type: "google.protobuf.Any",
            id: 5
          }
        }
      },
      ServerDataPageRequestParam: {
        fields: {
          page: {
            type: "int32",
            id: 1
          },
          pagesize: {
            type: "int32",
            id: 2
          }
        }
      },
      Response: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            type: "google.protobuf.Any",
            id: 3
          }
        }
      },
      CountResult: {
        fields: {
          count: {
            type: "int32",
            id: 1
          }
        }
      },
      ExceptionResult: {
        fields: {
          exMsg: {
            type: "string",
            id: 1
          }
        }
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          Empty: {
            fields: {}
          },
          Any: {
            fields: {
              type_url: {
                type: "string",
                id: 1
              },
              value: {
                type: "bytes",
                id: 2
              }
            }
          },
          Timestamp: {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          },
          DoubleValue: {
            fields: {
              value: {
                type: "double",
                id: 1
              }
            }
          },
          FloatValue: {
            fields: {
              value: {
                type: "float",
                id: 1
              }
            }
          },
          Int64Value: {
            fields: {
              value: {
                type: "int64",
                id: 1
              }
            }
          },
          UInt64Value: {
            fields: {
              value: {
                type: "uint64",
                id: 1
              }
            }
          },
          Int32Value: {
            fields: {
              value: {
                type: "int32",
                id: 1
              }
            }
          },
          UInt32Value: {
            fields: {
              value: {
                type: "uint32",
                id: 1
              }
            }
          },
          BoolValue: {
            fields: {
              value: {
                type: "bool",
                id: 1
              }
            }
          },
          StringValue: {
            fields: {
              value: {
                type: "string",
                id: 1
              }
            }
          },
          BytesValue: {
            fields: {
              value: {
                type: "bytes",
                id: 1
              }
            }
          }
        }
      }
    }
  },
  school: {
    nested: {
      PBClass: {
        fields: {
          classId: {
            type: "uint64",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          }
        }
      },
      Greeter: {
        methods: {
          SayHello: {
            requestType: "PBStudentListReq",
            responseType: "PBStudentListRsp"
          }
        }
      },
      PBStudent: {
        fields: {
          studentId: {
            type: "uint64",
            id: 0
          },
          user: {
            type: "PBUser",
            id: 1
          },
          "class": {
            type: "PBClass",
            id: 2
          },
          degree: {
            type: "PBStudentDegree",
            id: 3
          }
        }
      },
      PBStudentDegree: {
        values: {
          PRIMARY: 0,
          MIDDLE: 1,
          SENIOR: 2,
          COLLEGE: 3
        }
      },
      PBStudentListReq: {
        fields: {
          offset: {
            type: "uint32",
            id: 1
          },
          limit: {
            type: "uint32",
            id: 2
          }
        }
      },
      PBStudentListRsp: {
        fields: {
          list: {
            rule: "repeated",
            type: "PBStudent",
            id: 1
          }
        }
      }
    }
  },
  wdcloudpayment: {
    options: {
      java_multiple_files: true,
      java_package: "com.wdcloud.payment.proto.CommodityInfo",
      java_outer_classname: "CommodityInfoServiceProto"
    },
    nested: {
      CommodityInfoService: {
        methods: {
          getCommodityInfoList: {
            requestType: "google.protobuf.Empty",
            responseType: "RespCommodityInfoList"
          },
          saveCommodityInfo: {
            requestType: "CommodityInfoVo",
            responseType: "Response"
          },
          updateCommodityInfo: {
            requestType: "CommodityInfoVo",
            responseType: "Response"
          },
          deleteCommodityInfo: {
            requestType: "RequestId",
            responseType: "Response"
          },
          getAllCommodityInfoList: {
            requestType: "RequestPageAllCommodityInfoList",
            responseType: "ResponsePageAllCommodityInfoList"
          },
          releaseCommodity: {
            requestType: "RequestReleaseCommodity",
            responseType: "Response"
          }
        }
      },
      CommodityInfoVo: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          commodityName: {
            type: "string",
            id: 2
          },
          commodityComment: {
            type: "string",
            id: 3
          },
          originalPrice: {
            type: "int32",
            id: 4
          },
          sellingPrice: {
            type: "int32",
            id: 5
          },
          status: {
            type: "int32",
            id: 6
          },
          effectiveTime: {
            type: "int32",
            id: 7
          }
        }
      },
      RequestPageAllCommodityInfoList: {
        fields: {
          page: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          }
        }
      },
      RequestId: {
        fields: {
          id: {
            type: "int32",
            id: 1
          }
        }
      },
      RequestReleaseCommodity: {
        fields: {
          id: {
            type: "int32",
            id: 1
          }
        }
      },
      RespCommodityInfoList: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          data: {
            rule: "repeated",
            type: "CommodityInfoVo",
            id: 3
          }
        }
      },
      ResponsePageAllCommodityInfoList: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          totalRecords: {
            type: "int64",
            id: 3
          },
          totalPage: {
            type: "int64",
            id: 4
          },
          page: {
            type: "int64",
            id: 5
          },
          pageSize: {
            type: "int64",
            id: 6
          },
          datas: {
            rule: "repeated",
            type: "CommodityInfoVo",
            id: 7
          }
        }
      },
      ReturnCode: {
        values: {
          SYS_OK: 0,
          SYS_ERR_EXCEPTION: 999,
          SYS_ERR_NOAUTH: 1,
          SYS_ERR_TOKENINVALID: 2,
          SYS_ERR_PARAMERROR: 3,
          SYS_ERR_RPCSERVICEERROR: 4,
          SYS_ERR_UPLOADAUDIO: 5,
          SYS_ERR_UPLOADFILE: 6,
          SYS_ERR_NOAUDIOFILE: 7,
          SYS_ERR_NOIMAGEFILE: 8,
          SYS_ERR_BUSINESSEXCEPTION: 9
        }
      },
      BatchDataPage: {
        fields: {
          page: {
            type: "int32",
            id: 1
          },
          pagesize: {
            type: "int32",
            id: 2
          },
          offset: {
            type: "int32",
            id: 3
          },
          totalRecords: {
            type: "float",
            id: 4
          },
          rows: {
            type: "google.protobuf.Any",
            id: 5
          }
        }
      },
      DataPageRequestParam: {
        fields: {
          page: {
            type: "int32",
            id: 1
          },
          pagesize: {
            type: "int32",
            id: 2
          }
        }
      },
      Response: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            type: "string",
            id: 3
          }
        }
      },
      CountResult: {
        fields: {
          count: {
            type: "int32",
            id: 1
          }
        }
      },
      ExceptionResult: {
        fields: {
          exMsg: {
            type: "string",
            id: 1
          }
        }
      }
    }
  },
  resourcecenterstatistic: {
    options: {
      java_multiple_files: true,
      java_package: "com.szwdcloud.datacenter",
      java_outer_classname: "RSDataCenterProto"
    },
    nested: {
      RSDataCenterStatisticService: {
        methods: {
          getCustomerStatisticData: {
            requestType: "CustomerStatisticReq",
            responseType: "CustomerStatisticResp"
          },
          getCustomerStatisticDataByUser: {
            requestType: "CustomerStatisticReq",
            responseType: "CustomerStatisticResp"
          },
          getTeacherAccessOverview: {
            requestType: "google.protobuf.Int64Value",
            responseType: "TeacherAccessOverviewResp"
          },
          getTeacherAccessOverviewV2: {
            requestType: "TeacherAccessOverviewReq",
            responseType: "TeacherAccessOverviewResp"
          },
          getTeacherAccessTrend: {
            requestType: "TeacherAccessTrendReq",
            responseType: "TeacherAccessTrendResp"
          },
          getTeacherAccessTrendData: {
            requestType: "google.protobuf.Int64Value",
            responseType: "TeacherAccessTrendDataResp"
          },
          getTeacherAccessTrendDataV2: {
            requestType: "TeacherAccessOverviewReq",
            responseType: "TeacherAccessTrendDataResp"
          },
          getUserBehaviorTrend: {
            requestType: "UserBehaviorTrendReq",
            responseType: "UserBehaviorTrendResp"
          },
          getUserClickTimes: {
            requestType: "UserClickTimesReq",
            responseType: "UserClickTimesResp"
          }
        }
      },
      CustomerStatisticReq: {
        fields: {
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          },
          areaId: {
            type: "int32",
            id: 3
          },
          customerId: {
            type: "int64",
            id: 4
          },
          customerType: {
            type: "int32",
            id: 5
          },
          statisticType: {
            type: "int32",
            id: 6
          },
          loginUserId: {
            type: "string",
            id: 7
          }
        }
      },
      TeacherAccessOverviewReq: {
        fields: {
          customerId: {
            type: "int64",
            id: 1
          },
          statisticType: {
            type: "int32",
            id: 2
          }
        }
      },
      TeacherAccessTrendReq: {
        fields: {
          type: {
            type: "int32",
            id: 1
          },
          dimension: {
            type: "int32",
            id: 2
          },
          customerId: {
            type: "int64",
            id: 3
          },
          statisticType: {
            type: "int32",
            id: 4
          }
        }
      },
      UserBehaviorTrendReq: {
        fields: {
          pageNo: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          cityId: {
            type: "int32",
            id: 3
          },
          customerId: {
            type: "int64",
            id: 4
          },
          userId: {
            type: "string",
            id: 5
          },
          behaviorEnd: {
            type: "int32",
            id: 6
          },
          behaviorType: {
            type: "int32",
            id: 7
          },
          subjectId: {
            type: "int32",
            id: 8
          },
          gradeId: {
            type: "int32",
            id: 9
          },
          classId: {
            type: "string",
            id: 10
          },
          startDate: {
            type: "string",
            id: 11
          },
          endDate: {
            type: "string",
            id: 12
          },
          statisticType: {
            type: "int32",
            id: 13
          },
          sortField: {
            type: "string",
            id: 14
          },
          sortType: {
            type: "string",
            id: 15
          }
        }
      },
      UserClickTimesReq: {
        fields: {
          startDate: {
            type: "string",
            id: 1
          },
          endDate: {
            type: "string",
            id: 2
          },
          customerId: {
            type: "int64",
            id: 3
          },
          userId: {
            type: "string",
            id: 4
          },
          behaviorEnd: {
            type: "int32",
            id: 5
          },
          statisticType: {
            type: "int32",
            id: 6
          },
          sortField: {
            type: "string",
            id: 7
          },
          sortType: {
            type: "string",
            id: 8
          }
        }
      },
      CustomerStatisticResp: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          teachingCount: {
            type: "int32",
            id: 3
          },
          classCount: {
            type: "int32",
            id: 4
          },
          activateClassCount: {
            type: "int32",
            id: 5
          },
          teacherCount: {
            type: "int32",
            id: 6
          },
          activateTeacherCount: {
            type: "int32",
            id: 7
          },
          studentCount: {
            type: "int32",
            id: 8
          },
          activateStudentCount: {
            type: "int32",
            id: 9
          },
          parentCount: {
            type: "int32",
            id: 10
          },
          bindParentCount: {
            type: "int32",
            id: 11
          },
          viewReportCount: {
            type: "int32",
            id: 12
          },
          schoolCount: {
            type: "int32",
            id: 13
          },
          activateSchoolCount: {
            type: "int32",
            id: 14
          },
          totalBindParentCount: {
            type: "int32",
            id: 15
          },
          totalCurrency: {
            type: "int64",
            id: 16
          },
          loginTeacherCount: {
            type: "int32",
            id: 17
          },
          loginParentCount: {
            type: "int32",
            id: 18
          },
          loginStudentCount: {
            type: "int32",
            id: 19
          },
          lessonCount: {
            type: "int32",
            id: 20
          },
          loginParentAppCount: {
            type: "int32",
            id: 21
          },
          loginParentH5Count: {
            type: "int32",
            id: 22
          },
          loginParentWxSubCount: {
            type: "int32",
            id: 23
          },
          viewAppReportCount: {
            type: "int32",
            id: 24
          },
          viewBankReportCount: {
            type: "int32",
            id: 25
          },
          disabledSchoolCount: {
            type: "int32",
            id: 26
          }
        }
      },
      TeacherAccessOverviewResp: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          newTeacherSevenAverage: {
            type: "int32",
            id: 3
          },
          activeTeacherSevenAverage: {
            type: "int32",
            id: 4
          },
          activeTeacherSevenTotal: {
            type: "int32",
            id: 5
          },
          activeTeacherThirtyTotal: {
            type: "int32",
            id: 6
          },
          teacherTotal: {
            type: "int32",
            id: 7
          },
          nextWeekStayRate: {
            type: "string",
            id: 8
          },
          useTimeSevenAverage: {
            type: "string",
            id: 9
          },
          loginPerSeven: {
            type: "int32",
            id: 10
          }
        }
      },
      TeacherAccessTrendResp: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          xaxis: {
            rule: "repeated",
            type: "string",
            id: 3
          },
          series: {
            rule: "repeated",
            type: "string",
            id: 4
          }
        }
      },
      TeacherAccessTrendDataResp: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          data: {
            rule: "repeated",
            type: "TeacherAccessTrend",
            id: 3
          }
        }
      },
      TeacherAccessTrend: {
        fields: {
          reportDate: {
            type: "string",
            id: 1
          },
          newTeacher: {
            type: "int32",
            id: 2
          },
          activeTeacher: {
            type: "int32",
            id: 3
          },
          teacherTotal: {
            type: "int32",
            id: 4
          },
          useTimeAverage: {
            type: "string",
            id: 5
          },
          useTimeDayAverage: {
            type: "string",
            id: 6
          },
          nextWeekStayRate: {
            type: "string",
            id: 7
          },
          activeTeacherRate: {
            type: "string",
            id: 8
          },
          activeTeacherSevenTotal: {
            type: "int32",
            id: 9
          },
          activeTeacherThirtyTotal: {
            type: "int32",
            id: 10
          }
        }
      },
      UserBehaviorTrendResp: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          pageNo: {
            type: "int32",
            id: 3
          },
          pageSize: {
            type: "int32",
            id: 4
          },
          pages: {
            type: "int32",
            id: 5
          },
          total: {
            type: "int64",
            id: 6
          },
          data: {
            rule: "repeated",
            type: "UserBehaviorTrend",
            id: 7
          }
        }
      },
      UserBehaviorTrend: {
        fields: {
          userName: {
            type: "string",
            id: 1
          },
          roleName: {
            type: "string",
            id: 2
          },
          phoneNo: {
            type: "string",
            id: 3
          },
          customerName: {
            type: "string",
            id: 4
          },
          districtName: {
            type: "string",
            id: 5
          },
          cityName: {
            type: "string",
            id: 6
          },
          provenceName: {
            type: "string",
            id: 7
          },
          subjectName: {
            type: "string",
            id: 8
          },
          className: {
            type: "string",
            id: 9
          },
          firstLoginTime: {
            type: "string",
            id: 10
          },
          behaviorEndName: {
            type: "string",
            id: 11
          },
          behaviorTypeName: {
            type: "string",
            id: 12
          },
          clickTimes: {
            type: "int32",
            id: 13
          }
        }
      },
      UserClickTimesResp: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          data: {
            rule: "repeated",
            type: "UserClickTimes",
            id: 3
          }
        }
      },
      UserClickTimes: {
        fields: {
          behaviorTypeName: {
            type: "string",
            id: 1
          },
          clickTimes: {
            type: "int32",
            id: 2
          }
        }
      }
    }
  },
  framework: {
    nested: {
      PBUser: {
        fields: {
          userId: {
            type: "uint64",
            id: 0
          },
          name: {
            type: "string",
            id: 1
          },
          mobile: {
            type: "string",
            id: 2
          }
        }
      }
    }
  }
});

module.exports = $root;
