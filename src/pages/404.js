import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>404 Page not found</h1>
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/">Go to home page</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
