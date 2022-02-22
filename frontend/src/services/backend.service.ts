class BackendService {

    private host: string = process.env.BACKEND_HOST || 'http://localhost'
    private port: string = process.env.BACKEND_PORT || '3000'

    getUrl = (): string => {
        return `${this.host}:${this.port}`
    }
}

export default new BackendService()