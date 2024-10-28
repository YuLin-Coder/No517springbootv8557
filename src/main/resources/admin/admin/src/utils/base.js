const base = {
    get() {
        return {
            url : "http://localhost:8080/springbootv8557/",
            name: "springbootv8557",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbootv8557/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于VUE的农产品预售平台设计"
        } 
    }
}
export default base
