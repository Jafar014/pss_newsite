import { cn } from "@/lib/utils";
import * as React from "react";
import { Button } from "./button";

function Pagination({className, ...props}:React.ComponentProps<"nav">) {
    return (
        <nav role="navigation"
        aria-label="pagination"
        data-slot="pagination"
        className={cn(
            "mx-auto flex w-full justify-center", className
        )} {...props

        }/>
    )
}

function PaginationItem({...props}:React.ComponentProps<"li">) {
    return <li data-slot="pagination-item" {...props}/>
}

type PaginationLinkProps = {
    isActive? : boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> & React.ComponentProps<"a">

// function PaginationLinkProps({
//     className, 
//     isActive, 
//     size ="icon", ...props
// }:PaginationLinkProps) {
//     return(
//         <button variant={isActive? "outline":"ghost"}
//         size={size}
//         className={cn(className)}
//         nativeButton={false}
//         render={
//             <a aria-current={isActive ? "page" : undefined}
//             data-slot="pagination-link"
//             data-active={isActive} {...props}/>
//         }/>
//     )
// }