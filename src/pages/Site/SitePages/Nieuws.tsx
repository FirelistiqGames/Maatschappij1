import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Footer } from "@/pages/layout/footer";
import { SidebarApp } from "@/pages/layout/SidebarApp";
import { Helmet } from "react-helmet";
import { Landelijk1Inhoud } from "./SiteInhoud/Landelijk/Landelijk1Inhoud";
import { NieuwsHeader } from "../Headers/NieuwsHeader";
import { NieuwsInhoud } from "./SiteInhoud/NieuwsInhoud";



export function Nieuws(){
    return(
        <>
        <Helmet>
        <title>PvG - Nieuws</title>
        <link rel="icon" type="ico" href="/logo2.ico"/>
      </Helmet>
        <SidebarProvider>
          <SidebarApp />
          <SidebarInset>
            <NieuwsHeader />
            <NieuwsInhoud />
            <Footer/>
          </SidebarInset>
        </SidebarProvider>
        </>
    )
}