import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarTrigger

} from "@/components/ui/sidebar"
import { Item } from "@radix-ui/react-dropdown-menu"
import { Calendar, ChevronDown, Home, Inbox, Settings } from "lucide-react"
import { Outlet } from "react-router-dom"





const kopjes = [
    {
        title: "Gouda",
        url: "#",
        icon: Home,
    },
]

const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calender",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },

]

export function Sidebartest() {
    return (


        <Sidebar collapsible="offcanvas">

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="justify-center items-center text-xl">Menu </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            <Collapsible className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton> test
                                            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            <SidebarMenuButton>
                                                <SidebarMenuSubItem>test1</SidebarMenuSubItem>
                                            </SidebarMenuButton><SidebarMenuButton>
                                                <SidebarMenuSubItem>test2</SidebarMenuSubItem>
                                            </SidebarMenuButton>
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>



    )
}