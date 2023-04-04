import Nav from "../Parts/Nav";

function Layout({children,isEmployee}) {
  return (
    <div >
        <Nav isEmployee={isEmployee} auth={children.props.auth} />
        <section>
            {children}
        </section>
    </div>
  )
}

export default Layout