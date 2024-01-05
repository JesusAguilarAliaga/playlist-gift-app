const ContainerAuth = ({children}) => {
  return (
    <section className="bg-stone-900 text-white h-screen overflow-hidden font-urbanist p-2 flex justify-center items-center">
        <img src="/images/back-shadow.png" alt="" 
            className="absolute z-0 right-0 bottom-0 w-5/12 max-lg:w-3/5 max-lg:bottom-32"/>
        <article className="flex gap-10 items-center z-50 max-sm:gap-0">
            {children}
        </article>
    </section>
  )
}
export default ContainerAuth