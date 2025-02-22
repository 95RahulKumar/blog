import { useHttp } from "@hooks/useHttp"
export interface Post{
        userId:number
        id:number
        title:string
        body:string
}
export const postService = () => {
    const http = useHttp()
    function getPost(): Promise<Array<Post>>{
        return new Promise(async (resolve) => {
            const res = await http.request('get','posts');
            if (res?.status === 200) {
              resolve(res?.data);
            } else {
              console.error(res);
              resolve([]);
            }
          });
    }
return {getPost}
}

