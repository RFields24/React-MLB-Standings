import React, { useEffect, useState } from "react";
import styles from './styles.module.css'



export function ServerExample() {
  const [data, setData] = useState({ })

  useEffect(() => {

    async function fetchData() {
      try {
        const rawData = await fetch('/api/example')
        const d = await rawData.json()
        setData({ data: d.data })
      } catch (e) {
        const err = e
        console.log({ err })
      }
    }


    fetchData()
  },[])

  return (
    <div className={styles.container}>
      {data?.data}
    </div>
  )
}