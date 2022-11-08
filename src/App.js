import "./App.css"
import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage } from "@cloudinary/react"

function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "ds3y9nbdn",
    },
  })

  const myImage = cld.image(
    "v1667830813/keith-misner-h0Vxgz5tyXA-unsplash_1_cyjt0g.jpg"
  )

  return (
    <div>
      <h1 className="h1">im writing shit!</h1>
      <AdvancedImage className="background" cldImg={myImage} />
    </div>
  )
}

export default App
