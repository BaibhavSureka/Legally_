// import { SidebarDesktop } from '@/components/sidebar-desktop'
import Header from "@/components/Header"
interface ChatLayoutProps {
  children: React.ReactNode
}
//chat layout props
export default async function ChatLayout({ children }: ChatLayoutProps) {
  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
      
      <div className="group w-full overflow-auto pl-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
        <div className="hidden"></div>
        
        {children}
      </div>
    </div>
  )
}
