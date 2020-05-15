Page({
    data: {},
    onLoad: function(a) {
        wx.navigateToMiniProgram({
            appId: a.appid
        });
    }
});