App({
    onLaunch: function() {
        var e = wx.getUpdateManager();
        e.onCheckForUpdate(function(e) {
            console.log(e.hasUpdate);
        }), e.onUpdateReady(function() {
            wx.showModal({
                title: "启用新版本",
                content: "已为您准备好新版本，是否立即重启小程序",
                success: function(o) {
                    o.confirm && e.applyUpdate();
                }
            });
        }), e.onUpdateFailed(function() {});
    },
    onShow: function() {},
    onHide: function() {},
    onError: function(e) {
        console.log(e);
    },
    util: require("we7/resource/js/util.js"),
    tabBar: {
        color: "#A4A4A8",
        selectedColor: "#4285F4",
        borderStyle: "#ececec",
        backgroundColor: "#fff",
        list: [ {
            pagePath: "/fy_lessonv2/pages/index/index",
            iconPath: "/fy_lessonv2/resource/icon/home.png",
            selectedIconPath: "/fy_lessonv2/resource/icon/homeselect.png",
            text: "首页"
        } ]
    },
    globalData: {
        wx_model_name: "fy_lessonv2",
        userInfo: null
    },
    siteInfo: require("siteinfo.js")
});