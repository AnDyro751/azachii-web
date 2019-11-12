import React, { useEffect, useState } from "react"
import ItemPrice from "../ItemPrice/index"
import { FirebaseContext } from "gatsby-plugin-firebase"

const MainPriceItems = ({ currentLapse = "month" }) => {
  const firebase = React.useContext(FirebaseContext)
  const [pricings, setPricings] = useState([])
  useEffect(() => {
    if (firebase) {
      firebase
        .firestore()
        .collection("pricing")
        .orderBy("pricing", "asc")
        .onSnapshot(snaps => {
          let newData = []
          snaps.docs.forEach(snap => {
            newData.push({ ...snap.data(), id: snap.id })
          })
          setPricings(newData)
        })
    }
  }, [firebase])
  return (
    <div className="row u__no_margin justify-content-center">
      {pricings.map((pricing, i) => (
        <ItemPrice key={i} pricing={pricing} />
      ))}
    </div>
  )
}

export default MainPriceItems
