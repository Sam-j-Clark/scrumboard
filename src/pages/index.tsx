import { NextPage } from "next";
import { trpc } from "../utils/trpc";



const Homepage: NextPage = () => {
  
    const {data, error, isLoading} = trpc.hello.useQuery({name: 'sam'});

    if (isLoading) {
      return (
        <p>Loading ...</p>
      )
    }

    if (error) {
      return (
        <div>
          {JSON.stringify(error)}
        </div>
      )
    }

    return (
      <div>
        {data}
      </div>
    )
}


export default Homepage