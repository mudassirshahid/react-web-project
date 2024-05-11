import React from 'react'
import { Card } from './Card'

function CardSection() {
  return (
    <div>
      {/* Props with Card */}
      <div className="flex md:flex-row flex-col justify-center items-center gap-8 m-5">
       <Card title = "Delba" text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" btn = "View Profile" imgUrl = "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"/>
       <Card title = "Tokyo" text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis123?" imgUrl = "https://images.unsplash.com/photo-1557053908-4793c484d06f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHBvcnRyYWl0fGVufDB8fDB8fHww"/>
       <Card title = "Sara" text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis124?" btn = "View Profile" imgUrl = "https://images.unsplash.com/photo-1508978644997-53cc5bfb8a03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
      {/* Props with Card End */}
    </div>
  )
}

export default CardSection
