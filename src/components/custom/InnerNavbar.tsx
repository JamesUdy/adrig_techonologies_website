import React from "react"
import { NavbarLinksTypes } from "@/lib/types"
import InnerNavServiceComponent from "./InnerNavServiceComponent"
import NavItemCardsContainer from "./NavItemCardsContainer"

type Props = {
  navItem: NavbarLinksTypes
  handleSelectedNavBarLeave: () => void
}

const InnerNavbar = ({ navItem, handleSelectedNavBarLeave }: Props) => {
  return (
    navItem.assets && (
      <div
        onMouseLeave={handleSelectedNavBarLeave}
        className="absolute flex w-5/6 h-fit bg-gray-100 right-0 top-14"
      >
        {navItem.assets[0].image ? (
          <section className="px-12 pb-10 pt-6 w-full">
            <NavItemCardsContainer count={3} navItem={navItem} />
          </section>
        ) : (
          <InnerNavServiceComponent navItem={navItem} />
        )}
      </div>
    )
  )
}

export default InnerNavbar
