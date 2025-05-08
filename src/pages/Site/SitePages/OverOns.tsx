import { BrowserRouter } from "react-router-dom"
import { SidebarHeader, SidebarInset, SidebarProvider, SidebarTrigger, } from "@/components/ui/sidebar"
import {Sidebar} from "lucide-react"
import { SidebarApp } from "../../layout/SidebarApp"
import { HomePage } from "./SiteInhoud/HomePage"
import { OverOnsInhoud } from "./SiteInhoud/OverOnsInhoud"
import {Helmet} from "react-helmet"
import { OverOnsHeader } from "../Headers/OverOnsHeader"
import { Footer } from "@/pages/layout/footer"


export function OverOns() {

  return (
    <>
    <Helmet>
      <title>PvG - Over Ons</title>
      <link rel="icon" type="ico" href="/logo2.ico"/>
    </Helmet>
    <SidebarProvider>
      <SidebarApp />
      <SidebarInset>
        <OverOnsHeader />
        <OverOnsInhoud />
        <Footer/>
      </SidebarInset>
    </SidebarProvider>
    </>
    
  )
}



