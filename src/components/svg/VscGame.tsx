import React from 'react'

function VscGame(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 3H12C14.2091 3 16 4.79086 16 7V10C16 12.2091 14.2091 14 12 14H4C1.79086 14 0 12.2091 0 10V7C0 4.79086 1.79086 3 4 3ZM4 4C2.34315 4 1 5.34315 1 7V10C1 11.6569 2.34315 13 4 13H12C13.6569 13 15 11.6569 15 10V7C15 5.34315 13.6569 4 12 4H4Z"></path>
      <path d="M5.5 6C5.22386 6 5 6.22386 5 6.5V8H3.5C3.22386 8 3 8.22386 3 8.5C3 8.77614 3.22386 9 3.5 9H5V10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5V9H7.5C7.77614 9 8 8.77614 8 8.5C8 8.22386 7.77614 8 7.5 8H6V6.5C6 6.22386 5.77614 6 5.5 6Z"></path>
      <path d="M13 7C13 7.55228 12.5523 8 12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7Z"></path>
      <path d="M12 10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10C10 9.44772 10.4477 9 11 9C11.5523 9 12 9.44772 12 10Z"></path>
    </svg>
  )
}

export default VscGame
