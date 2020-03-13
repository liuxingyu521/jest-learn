export default {
  get() {
    const mockData = {
      data: [{
        name: "Xuer"
      }]
    }
    
    return Promise.resolve(mockData)
  }
}