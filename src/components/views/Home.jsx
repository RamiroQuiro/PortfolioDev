import React from "react";
import { Link, Outlet } from "react-router-dom";
import image2 from "../../images/RamaCode.png";
import Menu from "./Menu";

export default function Home() {

  return (
    <div className="bg-gradient-to-r font-roboto from-gray-50 flex justify-center items-center to-gray-300 dark:form-gray-200 h-screen min-h-screen">
      
     <Outlet/>


      <div className="w-full h-screen flex justify-around items-center">
        {/* Menu Parte Izquierda */}
       <Menu/>
        {/* Titulo y redes Parte Izquierda */}
        <div className="w-1/2 flex ">
          <div className="text-5xl absolute text-sky-900  z-10 font-black  duration-500 -translate-y-44  translate-x-40">
            <h1 className="-mb-4  peer duration-200 ">Ramiro Quiroga</h1>
            <span className="text-lg duration-200 delay-75  ">
              Desarrollo & Diseño Web
            </span>
            {/* redes sociales -  */}
            <div className="flex mt-2  justify-center  gap-2 ">
              <Link
                to={"//www.linkedin.com/in/ramiro--quiroga"}
                target="_blank"
                className=" my-auto block group cursor-pointer"
              >
                <img
                  alt="LinkedIn"
                  width="full"
                  height="full"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABFElEQVRIie2UoU4DQRCG/9kUgTiLoXhcw21OILHwEISQnMNieA/SulqeoPZck97OHRaBoXUoHAm5/TGUXC7hmt5eMfC5nZ39v2QyWeCfDUj9YK29ADABcNgxbyUiqXNuti6YRsM4IBwAhiQn9UJTMAwIX3PUJqjzTPIKwH2IrU0wLopiqqo3AD66CgYtd9dxHL8YY05J7u1CcCwiDyS7ZgNoGRHJO1UVVf1eZe/9gaqKiJyLyFkURfvGmBMAT1sL2nDOzUgusix7z/P8UURuexUkSZIAeLPWXgJAVVXzXgXe+xGAAckRAJRl+dqrgKRs7goQbMPOBc3fNGzpv6iv9q+PaNVD5vJHgYikgZIlyTTg/V/kE0oVW80hZ+ZrAAAAAElFTkSuQmCC"
                />
                <span className="text-xs text-center p-2 bg-sky-800 text-white font-roboto-mono-bold absolute -ml-3 translate-y-5 group-hover:translate-y-0 duration-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 rounded-lg">
                  Linkedin
                </span>
              </Link>
              <Link
                to={"//www.github.com/ramiroquiro"}
                target="_blank"
                className="group relative block cursor-pointer"
              >
                <img
                  alt="Github"
                  width="100%"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAADMElEQVRIie2WTUhUURTH/+eOTtMXBiLVZCWZCEqMdh0kCppNm1poILQJQqQWUbRrGbqNllELwT6hWvShGW0ihHBh7yMhKAwrQektIgrfgNmb+04L38R71zejDtGq/2ruuef8f+/ed+95A/zXPxKtNlFKuQtAF4BjABoA1AdTcwBmiGiUiIYNw5j9K+BMJrOjurr6EjP3AUiskO4DeKiUujg5OTlTMVhK2Q3gDoBNKz2gJpeITpqmOVIqoeQKpJQXAAwBWLdGKIKaE+l0+ofjOBNxCbErDlb6EICoABqWT0TH41a+zLizs7MeS9v7Z46ZDzBzhpmHylGYeYiZM0KIg0V/Zr7b3t6e1nOr9IDneQNEFHmn8/Pzb6anpxcB9Ekpnwohvi8uLr5vbm7+NjU1VZtMJluYeYtt208AIJfLpVzXLZZvFkIMADgd9oxsdXBlPkF798zcZNv2dLnVhtXW1taUSCQ+hEKqqqqqYWJiYq4Y0Le6S4cCgBBi62qhQf42LZTwPK8rkhMeENFR3YSIHpmmOb4WsG3br5g5cqB07wiYmffoJkqpK2uBhqTXNZYEA9iuV7uua1dCLRQKel3kZOvgZdertra2kgaCVCqV0kKRs6ODvuoGnucdrgRcKBT0uoi3Dn6nGxBRfy6X05++rKSUG4ioXwu/LQd+GeOzP5/Pj8Z1nzgFne8ZgH3a1Fh4EGkg2Wx2p+/7HwFUx3guENF9Zn4uhLAMw/gUqtujlOoIrswJAPoOeQB2W5blFAORFRuGMUtED4pjZu4FMBwM1wfjW77v7w3XKaUaiOg2gFMxUAC4F4YCMV2qrq7utRCiF8B6IjqUTCaPKKXqATQDyAO4bFnWjXCN4zif0+l0EkDcQZwH0O04Tj4cjP0sdnR09DDzAyx9Xc7Ytj0YlxeWlLIRgN7PfWbusW37sZ5f8h+IlPIsgKsAvvi+f6qmpmZ8bGzsZxm2kFKqMBTAOcuyrscml3KxLOsaEXUD2CiEeOG67oKUksuA/dDv78zcUwpaFgwApmmO+L7fCmAQQKFcbqBfAG4KIVritrciZbPZbVLK862trckSKbTau/5f/1S/AauKJauov8u1AAAAAElFTkSuQmCC"
                />
                <span className="text-xs text-center p-2 bg-sky-800 text-white font-roboto-mono-light absolute -ml-3 translate-y-5 group-hover:translate-y-0 duration-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 rounded-lg">
                  GitHub
                </span>
              </Link>
              <Link
                to={"//codepen.io/ramiroquiroga"}
                target="_blank"
                className="group relative block cursor-pointer"
              >
                <img
                  alt="codepen"
                  width="70%"
                  className=" w-10 -mr-2"
                  src="data:image/png;base64,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"
                />
                <span className="text-xs text-center p-2 bg-sky-800 text-white font-roboto-mono-light absolute -ml-3 translate-y-5 group-hover:translate-y-0 duration-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 rounded-lg">
                  Codepen
                </span>
              </Link>
              <Link
                to={`//www.behance.net/ramiroquiroga`}
                target="_blank"
                className="group relative block cursor-pointer"
              >
                <img
                  alt="Behancen"
                  width={"100%"}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABuklEQVRIie2UPWsUURiFn3dmBxaiRCtNXAUFBREF5y47sbEQJCKk0l4bt7O0UgT9CWKh5BdIWsEiVjbLLHsFU0hARNSIhQgplblwLJyN65LdNbPBRg9c7sf7nnPuN/zHBNhgp9lsXpb0GGhU1Nsws3av13vWH4gGo1OKAzRKjS1EwwlTiPdxeJzBrqM2JvYSeAsg6ZCZnQH2DMdKLAH1nRose+8f9TtZlh0IIawCpwEPrA7kXqxiAIBzbh14k+f5knPuAbAM3ACuAe+BeWBmFP9PzmAWWCjbSVmvA8e99ydqtdq8pOeVDSQtFkVxKsuyBnCrHL5rZsecc2uSEjO7U9kgiqLzSZJczfP8E/AUII7jV2a2KekhQL1efz2KP/EMJN0GDrZarSchhBUzu1kUxXdJiqKIEMKVEAJmti1/ogGwBrzodrtf0zSdBTCzk3Ecv5N0D/hsZt8kVTPw3i8COOfmgP5e30+S5FKn05kDSNP0upmd247/27qcc4PT+AB8Kdt7gaP8ukUAm/x8cPuBs0OT2tIdt4IjZRmFfcCFMXHgL/xFwwYbu6D5caSBmbWHE3YqLqk9Bf9fxA+7y4hfqSsJ8QAAAABJRU5ErkJggg=="
                />{" "}
                <span className="text-xs text-center p-2 bg-sky-800 text-white font-roboto-mono-light absolute -ml-3 translate-y-5 group-hover:translate-y-0 duration-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 rounded-lg">
                  Behance
                </span>
              </Link>
            </div>
          </div>
          {/* CV y Skill */}
          <div className=" flex flex-col gap-4 absolute  translate-x-96 z-30  items-center ">
            <div className=" flex flex-col -translate-x-16 static items-center z-50 ">
              <li className="flex flex-col  duration-200  hover:break-normal w-16 hover:border-collapse border-0 hover:w-44 hover: hover:absolute hover:z-50 justify-center items-center mx-auto hover:translate-y-4 group cursor-pointer gap-3  -translate-x-10 translate-y-6  ">
                <div className="bg-gradient-to-tr from-orange-300 to-orange-400 border-collapse border-0 group-hover:shadow-lg group-hover:shadow-gray-300 duration-200 h-full py-3 rounded-3xl grid grid-cols-3  justify-center mx-auto  text-3xl items-center">
                  <div className="  relative block cursor-pointer">
                    <img
                      className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                      alt="JS"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACpklEQVRoge2ZS0hUURjHf8d8Zy8kn2lmZWkYJWUIIkGLwKQWgQ/EjaQJEj0QKi3bFC6LgogIF2Zgj8VUPijUiCAYok2mkAYqNKJiKFY2Ezmnxa0OozM1k3rvovODy/3O+c7j+3Mu53VBo9ForET4csg+pJmB/A2R4T3WILMDWWy0AKvRAqxGC7AaLcBqtACr0QKsRguwmiUTIDLE7+f+E0/f2wEoqRHE5wlCMgWJewVlpwW97wPvx/QR6LbD7kJBSzuMTsD3WRgZh+bHkF0o6LYH1p6pAtxuOHJe4HQZ6bBQSE813gAzTqi9LJABnAVNFdAzAIMffnYcBK/uSfpaJf0dko1JcLwMOhslwudBdz7BSxOqd6amlR0aAls2GHZyPPQ8lESEB96mqSOQmqRspwuKTgmGR4z0vwQPJgtIioP9uSpt64KtBwQV9YKB4X9r0/RZqPGiZGe6SjtdcOsBpBcYQr58Daw90wUkxMCLZkltJURFqvzZWUNITolgctp3/blYshIvj4BLJyRDnZKGk5LYaOXr6YcL1/yfhpZEgNv9Z/+veT56NZypgHftkj3bld/W5X9fCxYwPAKHqgVtz1XeoMOzTESYsm8/guwiwecZlbdqBRTnq9Vr7KP//S9oHbjbAeV1ghknPH0pqCqCtBTJnVbPTyAl0XiX1BhbCICD1YKmBsm6OJj6BLYuVScx1iQBc2eTK00w975483rYtsmwc3ZIWtoN/zM7JO8TJMTAxCS4vqk6xfn+x7CgTygtBdpuSFZGefeHhsD1erU1OFYK56qUX0pwjHkGn7cL6o76vxlalOv10QlouCmwdYFjHNaugdwsOFspycqYX97+Bq42C173wpADIsMhMw1KCyTlhyF4mZdAfVyv6/8DVqMFaDQazf/ND8ttt3KFrySDAAAAAElFTkSuQmCC"
                    />
                    <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                      JavaSrcipt
                    </span>
                  </div>
                  <div className="  relative block cursor-pointer">
                    <img
                      alt="React"
                      className=" peer object-cover w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                      src="data:image/png;base64,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"
                    />
                    <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                      ReactJS
                    </span>
                  </div>
                  <div className="  relative block cursor-pointer">
                    <img
                      alt="css3"
                      className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAESUlEQVRoge1Zy4scRRz+qmd2XovLzm5WMPEB7mKyh5wSLyoYyYiPg0SQHOLR/AMBIbko3qJeglcJhKDgQfEiJj42RBCXXHIREgKBXLKRzGzceWzP9HZPVf08TLJTXTtdVTPTSQzMB3Poqu7q36++7/eoHmCCCSZ4osFMk97JSz6A6UdkSxJ8+cXhp5ImPcvD1ZSNGQVGG4wOMFAtXVuGByMYbciaJiVQNWrMxYClfcM/5LdAd//p2cDGYoA9HgYE79tAZhX8L2OAuOxfeGMwAJj199CgMABpVoFNQo8nC6kSsjBgDGLBRM2jwT6+NF/A6vFlqy3lctl6z8I3d1EP+7JhnIMe2CDGYAAy2fv6lrAa5gIC0IpkfEwq11mzCswOZJK9rwccREmz7mhFEkJfR42BrXAMBk4f3gDQHTTFJaEVjs9CI9Ksl7L366GLM2/VTc8bYwBgBFxaB7B70OziV39bDdQL2dJMFjeOPr193dTkE9t9oNazIRm2NAqkXAvmCvFXNsK4fSRiDlnfbXWAUu6H5vOaAxoDTGGAyN4JWB1gKTMwn493V7oDw9QAwBoDAIbohz6vPIvjBxZiY7Y6oEsIXEkMUo7PAIZgwNd30wHNrl4DlCB2YMBBQu4M+N3h02pLT6MKA8zSBwEpx8AoDDTChxwD3NAP6Th7dR1nr67HxvQ6cP5QGR8uFbevd2Yhsd0HceGlEAOSUs1CZS0LNSO9DigxMJVJIQuVpmoIpMQAZ5d3FfDnR/2O9FotwOvnbhiXK+cMdYBIbSMI90r3bObZGfjsDQ5gYD+yqdFfnLIvN6sVshgDUkDpEP/F1wcH9mEq3MSdcDLbjOJZZ1cpizcXZ5DL7Fw25zG8+1wBz5Tic2orTSK2nlP2cyhkAIFVGWjH6cWPJIgAdl/WM/kMvvtgEY0tgQs3m/jx+gZye/I4uljEkRcKKOd3OqZ2o0z0DzLkmP2cHEj6PiQkocMlpjXpzBYyOLZ/Dsf2zxkrcZsTulKRkFoDiNVcjhuuEkrcje+vbaA5wumsEUl8e7MTH1QzkCfTYwAGPX78622c/H0NL++exnt7Z/H+8iwWpqcG3lsPJX6+HeKHWwF+WwsRSS2FSrUPcusAHCWEqolOIQlX1nxcWfPxyeU7284cWS6DShIXDEbHoErIoQo7O9DrSN0OwKozn16+A7a0F9y1wxjie9ADOMWAoNG+D3FJ7sZzDtbtp32RSZMBT9RA437m1UAEikKwtg+0fVC0FSe5200vBsBFFRnXeDdAcCAIQO1NoOMDQpqE6eSA+7aeWnkxA69CRBUAbwNI/Nckhj3PA502WMcHhaHpzoDA/mKMViSjn3C6ct1l+dF0cWK1mM13XpWSVRhDhYADI60D3ALRCvPYipD5X/Dla5vDLpCOsN3ZGWmXTUg5MgGcWC1mcsEhAt5B7wcAFxlwUUTFP3DmlSD1d04wwQRPLv4DT7jzTbs1mf8AAAAASUVORK5CYII="
                    />
                    <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute ml-3  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                      CSS
                    </span>
                  </div>
                  <div className="  relative block cursor-pointer">
                    <img
                      alt="html5"
                      className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEo0lEQVRoge1ZzW8bRRT/vbG9sWtC63y0uB9QhRsRrVAOJeVAK+VALyAO9ELhwrkSfwAHzv032l6CAgKiigsoRFSViiIuhA+BQCEKwU7dxLits/bOPA5mP8bZ3ZlNLEol/06e2Z037+1vfvPmjYEhhhjiiQaZXti8Mf0AQPk/8CUNzeqV1SNxD4TF4NqAnckOxlrSI4sAqD5IX/YFwh9Jj/KmsQyuGdeZAeUT7cxjvId5uDsFv5kYgJEBATwWBpQXfjYC1pPe+99qgKXG+/4ZAPjxMBAJQImDaIBRS9tsi1NvojzzQaqNgjNimgaPVl6HbK2G80YZ8A7EgEhlgApPm01YgIrPBb8ZWgBe9dTkn0njjAEwp2uAnKfsPDRAlE6GDX39b9DFJS9xnMmwYs/AwGGzdxYQxVPhnJ6dgAELDZx496f7f92c7gIoxD0XzqjewQqNhXMAq6ArLg/kKudx6Oz1oE3FkIHo+iem1ACMDBCBAWwlvuDoGlDdluZ8EnhX39pF6dnQRnQHSsnCgAUDvdlQA+F43CNR6NNAt2VlUrXX0Vp6Pn66KAOUnMQAu0QGUHI2Fv0MuH9bmUwDRzWg0hmwDSB5J+rbRtmSgTToDKRrwG4JKa6D4rNZ/xIqHDuH8bdW9D5TImOJ1vILAPd2y6gGHMcZAANCxDJAhTIg7L5BGrizFTjPCgAHATTHLq80U12zmkHFn4coP5gkpnbDRKsdIVIKGR9WAbCI1wA5gzlGsBsGoLyIS4YtFLDUAAuuk9yrAdn8BY2PZozj+xOZc/oqRk6/H7SjDMDyGO3DigEHcqA1gRipam12N4PfUQGnFTKBLZsJJ56p1gGY06slaETPicpN0IAFA1ZLiC4ueZs3prcBjO8xcOFjYGQsaMuvL4N302sgUewLILKEbAuZwJbphQjiveru6G0n9vpGA+1ZQgkMpBQyPrIEEKsD3r2vdziVVCNUOALKHQrHy0fgfz9ClkLGR4YsxPW4izzubmu9YuptcPEouHEX3I7GLJA7/BIKx97Qx0cEnKWQ8ZEhAFHrfaM+uNtakypnQJUzPedav4Eb36J4sor82KsgZ4+E9PWfoZDxYR0AE9cpxn90dmI6e6DRKdDoFAoTE8l23Y3wd4ZCxoe9BhJqY966A964Bbj3rE0BAFQX3vY36NYXw64MhYwPawYEcZ05RgMPfof8/lqvUaqCjp6HmJwFKmdBQq9C2WtCbt+G1/gK3r0vwZ5eO2QpZDIHAOaa8Ta+vQleW4BcWwDyZdD4DMTky+h0y/Dqn0Du3AVYxptXgOpGFoShkMkcAFG+zha1bgDvIbi2DFlbhptwucuS4LkCsp2DdHPaHmEqZHzYi1hSLVPWSIDyCF47B9nO6V+8D6ZCxkemm/PazRenJNQcMc0B/BqAUeMgAMXxDmQ7B88V/WedKBSA78C0COL56pXVH2xs7/vqf31+tuR0d15RSsyBMAfAfK7eizaDbgvGYg5yfvKdHzfNQ3Qc9L+LABnYaQC4BeLP87vyi8n3fj7QLcDAAohifX62lO80LwDiEsCXAEgAnyrgs+O/rt6hDwd3NB9iiCGecPwD8wXLM1nL4PYAAAAASUVORK5CYII="
                    />
                    <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute ml-3 translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                      HTML
                    </span>
                  </div>
                  <div className="  relative block cursor-pointer">
                    <img
                      className="object-cover w-2/3 peer mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                      alt="tailwindCSS"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 66 40' fill='%23fff' fill-rule='evenodd' stroke='%23000' stroke-linecap='round' stroke-linejoin='round'%3E%3Cuse xlink:href='%23B' x='.5' y='.5'/%3E%3Cdefs%3E%3ClinearGradient x1='0.00%25' y1='-88.89%25' y2='188.89%25' id='A' x2='100.00%25'%3E%3Cstop stop-color='%232383ae' offset='0%25'/%3E%3Cstop stop-color='%236dd7b9' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Csymbol id='B' overflow='visible'%3E%3Cpath d='M16 12.8C18.133 4.267 23.467 0 32 0c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 32c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z' stroke='none' fill='url(%23A)'/%3E%3C/symbol%3E%3C/svg%3E"
                    />
                    <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute -ml-2 translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                      TailwindCSS
                    </span>
                  </div>
                  <div className="  relative block cursor-pointer">
                    <img
                      className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                      alt="nodeJS"
                      src="data:image/png;base64,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"
                    />
                    <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                      NodeJS
                    </span>
                  </div>
                  <div className="  relative block cursor-pointer">
                    <img
                      alt="mongoDB"
                      className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                      src="data:image/png;base64,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"
                    />
                    <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                      MongoDB
                    </span>
                  </div>
                  <div className="  relative block cursor-pointer">
                    <img
                      alt="firebase"
                      className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEIUlEQVRoge2ZTWhcVRTHf2dekjYfJvRD0CTVVDraRAsqFUrb2AbBjaAbxZUgrSBSbFqKzcKvyUIQBNuIUISIWdTNrFy0i0JpqbaVQrZ106WSVmo/Uk1TE2dOF3cmfe/lvbx7X+80CP3DMPPeu/ee//+dc+499w48xP8QOsGrOsE1neCV5eZSyNnvNWA1cFhLucfwgrzGB2rfz9HH277I5EFeAf2h36P6Hc0+yOSBswA9SifQHbpVpIV3/VFyg7sH5hkAJHJPKGmZVk+cnOAuQCLhU0c3M7wfvqGK6GFO6SF+ykvOBr4EgPCxfs8jC9eHeAtlCHhDv2ZHXoJZcBegCzNQHGsJ2AugZQKEUsjK57nYWSDPLJTsAYOPdJzVTPFepJ0ytJQXVBE9x5f6C7/rr/S5kHESUEvUpQx0UWAE5ZMES4leUEU4xxjKCEIvFbdwc/PALBsz+/zFASr0Lma62AtaJuA848CHoXZFF0puAqpLhg9UgCsEzKRaW/CClgno4QeUXbE2T7tQchOQNgPV8SdGxI3adxw1L+hFWuimjPJOQhsnDzS5NEYYQFOezQNXF0jAP0BXQruAUW4wDbyeMlJRFRFJtRSBmwBdwgOXgWro+ibQAQShewWgmJmk7VygB/jDhpJ1CNUKtg2JD/8Frsc7ALdilopAp4Wxin0e2OdAM0VIqTqnINHhtzC5EADPYEceQBshoJASPreB6VQiMIMh32FtySmR7QWklRBpbx9gJbAZaLe2Umdl7QH7JE6aQv+ufZLQCuzE7c3X0ZAQkpgHFDPzJKGd/OQNntJJu12elQAtUVj0Vm5C4orbwf2SB2hilvU2De080Md6CO24FLiS0K4TQ77NatQsZlaJbCcgnsDXgDuxNqsw5H1tLC3zwE5AOIGrmJonjFXAILDCjpslrDxgOwvdE3AVmAs9WQtsJ22Jyw9LD9gKMCFUIfr2H8WQd6uo7CCeQkgVwayl98plgMcwYdMI8ga9eiJ7CczOgR/pAboi5fLjwDailaZ/CG0pxWMI2QL+q4VPvVx+Athq1dMHMsMoOwCEfu5gyuU+4CWU+Mlco2BRE2ULqNLPFGYn8PwDJA9WVWm2gNvspJsqzyI8SPIGHjywhlZ6l+1PjEwB2cR62A1c9MHGCcIlNPvYPlOADHKSlbyAso/0vZdPzKCMMs0mGeRYJj+XkfUCa5jjM4Q9+F8FFOEocxyUocRaNxG5klJ/5kUKjGEKCR+YpMCwbOW8a8fcs4oqwlneRPgKeDLnMJdRSmxnXCRyqmSN+54WdZI2ZjmIMILZxttgHuUIzXwqWyKnR87wNq/rGdbRxBeJ551RnKTKsLzMbz7sel+Y9CxDwBiwKWbpErBftnHcp72GrKx6miZa+ABlGAhQvqWVb2Qz842w9xDLibtqWvbN1ZrtxgAAAABJRU5ErkJggg=="
                    />
                    <span className="text-xs text-center p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                      Firebase
                    </span>
                  </div>
                  <div className="  relative block cursor-pointer">
                    <img
                      className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                      alt="git"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADnUlEQVRoge1ZPWgUQRT+3u5d/MkZFDRdJjEWNkKKWAmCYCFqc5cQfxB/ComJIdFKbYSgCFGx8CQxSkT8Kc2dvYggpLIxVjaibgSLXBHN7iXx9u5Z5A6Ou92d/ZkrAvc1y7zZ9/b7dnbem5kFmmiiiQ0NakRQBshKiWsAxsqmdGvWuEcAq36WcgEMUD7V8YhBIzX2mUSPcYnGUVL5PKUC3MhX9SsXoUyAjHzVfUpFaCqCAMByf9deJrogu4+Ai+a8mGRFLy+yAB7sjS8lO/a0zf74yuBjIFgyHwKGzJSYUiEikgAegG4t5l7GiD5ZSdG7LbPwsQQcAbAs8y2LeMrj0TiEduYB6Fah4yXApwDsYMI7Kyl62zLGXIlwFP5EXDTnxZMoIkINIR9CzNouXoNwsqYrB610ODH764uZ2t3DWtHWitjM4NMgugpAd4wHTCeyxuUwdSKwAB6AbtmdrwA+7XJLTid9/5bM95/VxuVkxy0iuukaN6SIQEO3Tl688CAPADvX1op/a42xeHzGK3bYie1bwPo3L54DOCMNqtl1n0re1JZkfmFE+BLA49AsWzwD4ayvoDH9XK1N37S2qxEpViqAx6FZX8QzAOf9BCzTmDBT4nqltXRc7Nj+duFbI+qEpwAGyJwXk2BIK2wN4gAmKo1YnD+v9ovuRtQJ104GKN/XOUnAUBDmzmxI2EX+sNovulXXCccOBsjsE9PMPByBdg0bEnYJ71eSXV1tGWMO0A+yhn3E2A/mBwCKjm6StZOjsfz9Tjj1BUEia1A5XnVu/0FEB1ozP39X3yurEwBuJLLG3Vqj29CMudhVoKvEsbq3LasTAEadjMqW00HA9krdXsBGfiVMLDcB6TDB/EKPx5N1RAotKU8ndubkOAcYIDMlpqJmIJc5AAB/wDzc2t7+BgCsxdwJgKcAtLnwcV0nuRYKFSI8BFTwr3xt8eDhuchznQME8LojT/olHAIt8CY/k+gxRrxWqJ6TmADeml0YZWA6IDEG8LCqnUbAZXL5zQ/KNv/SLFQZiSAiGLidyBpXK+1E1rjCxHcC+PveG/hKo0FFUEx7XPcgG3U2JwTd2PiuA0FElFb/2XW2TYWCzC/MrixQIfMrIkyeD7ulDLepl6dYZXlehtAHSz7rROQ8L0OU8xg/dSJynvfBIxr8Huo6+Ck55FVywBpUhMoT6g1/vN78wVGLDf2LqYKqn3yjZUO69a1xvxE/+ZpoookNjv9pxtAxljvmYQAAAABJRU5ErkJggg=="
                    />
                    <span className="text-xs text-center ml-2 p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                      Git
                    </span>
                  </div>
                  <div className="  relative block cursor-pointer">
                  <img
                    className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                    alt="phothoshop"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAElklEQVRoge2ZfUxVZRzHP+d24cK9cJV3ULHYUmcwwGGhGL6WZhLYllQy0CgFTZfZH1lrc3NZrZVrs2zgpszAVi6HRAMz0kVDIBWcDDAmDAIUEHm/vHjvPf1x8Sp5z0UO5+Js9/PXc5/zu7/f97vznPO8HHDixImTh4kwXsDaOlHjpiNNhI1AGKBzsKYBoAqRnGEDmQVzhGF7wXYNxP0jzlQ/xi9AhJIKJ0Cl0URcfrDQIhUgaWBtnajR6CgDIobaO6g9mEFn+UWMhkGHKL2DWuuOd9QC5qanops9C6ByeIBFUndCJZXITUcao+JL3thO27k/HS4ewGgYpL24hNL0XQy1dwBEarRskYqXNCBCEkDtwQxu9/Ypr3QcjH39XP06c4wWW0gaAJ4C6Cy/qKyyCXBztLYgECYVY8+ABzAlw0YK44BhjBZb2DPwSPDIG1DL/eObr7/I7q0b0Li6onXToFIJGE0mGppucLakgsycfJqvdyip1SayDQT4ehESHHRfv/d0PVHhc0lPiSdpx37O/HFhUgLHQ7aBezmeW0RdfTMzAnx4ftlCnpgViIfWnWNf7SFsVSqdXb1KlLGJIgYO5+RTVlEDgNZdQ97RT4hZGMo0vQevrFtGRvbPSpSxiSIG7sUwOMxn3xwn7+h+ACJCn7ReU6kEElY/y9JF4QT5+9BvGKSqtoGsE4V09/TLqqe4AYDm1rsPr6fOHQC9p45TRz4mesH8++JrrzVReLZcVi2HGJg/53Fr+0b7LQDeS0u0iq+qbeBaYyuzZ/oTOi9kUrUUNxDo781Hu5Ktv38vqQBg+WLLiryxuY3FCW9jMpkBCPL3wSyaZddTxMCWpDgS1iwhJDiIFTGR6D0te56yihpOn7MMjZERIwBBAT7ERIVSXH4FgOvtnZOqrYiBjetX3dd34fJVXtu+D7NZBCDv1xKWPB2Gq4uaguzP+f5UEXu/OEpr2+QMKLKU6BsY5OatHv6ub+ZkQTEp73zKysTdtHV0WWMOHcsl/7fzlqIqgaSXn+NSYSaJLy2fVG1F7kD85g+t84AUJpOZV7ftY9OGNex9dxMBfl7oPXUc+fJ9unr6Zc/YU7qYE0WRrB8LiVj9Ft/9dMYiQCWwY/N62TmnzIC7m6u13ds3wLYPDtDTa5m8Av28Zed1yDxgi6IfDlB6qZqzJZV09/QRGx1ufVtV1zXKzjtlBtzdNKQnx5OeHD+mf3BohAOHT8jOK3sI3b5tvNs2msaNP1lQTFf33cMBs1nkr8u1rEvZw5WaerkypM+F1reKIsDp2BdkJ7eFn890vKZ50NTSztDwyLjxa4oLAcidIdjUOmVD6A4dnd10dHYrlu+R3xP/rw30g+Ws8mGh9rAehEvuSe0ZqAbwjlqgoKSJ4ftMFACiaNFiC2kDItkAc9NTUXtKHow5DBe9nnk7tgIgQI5UnKSBYQOZQKVu9iyWZH1L4IpY1Dqt8kr/g1qnJXDlUmKyDuHm5wtQ6dJNplT8g3zgyAciFdb5oIz7gcPuWyg/WGhx6SIakZ2iSCmjD7aD6UfgPCI7XbqItifeiRMnTh4+/wIrO3ibddaBwQAAAABJRU5ErkJggg=="
                  /><span className="text-xs text-center -ml-2 p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                  Photoshop
                </span>
              </div>
<div className="  relative block cursor-pointer">
                  <img
                    className="object-cover peer w-2/3 mx-auto saturate-50 hover:saturate-100 -0 duration-100 hover:scale-110"
                    alt="captureOne"
                    src="data:image/png;base64,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"
                  /><span className="text-xs text-center -ml-2 p-2 bg-zinc-800 bg-opacity-70 z-50 text-white font-roboto-mono-bold absolute  translate-y-5 peer-hover:translate-y-0 duration-200 invisible peer-hover:visible opacity-0 peer-hover:opacity-100 rounded-lg peer ">
                  CaptureOne
                </span>
              </div>
                </div>
                <p className="group-hover:font-bold  group-hover:break-normal font-medium text-center uppercase text-sm group-hover:text-sky-900 tracking-widest ">
                  Skill
                </p>
              </li>
            </div>
            <div className=" flex flex-col absolute -translate-x-32 translate-y-32  items-center ">
              <li className="flex flex-col  duration-200  hover:break-normal w-16 hover:translate-y-4 group cursor-pointer gap-3  -translate-x-10 translate-y-6  ">
                <div className=" bg-gradient-to-tr from-zinc-300 to-zinc-400 group-hover:shadow-lg group-hover:shadow-gray-300 duration-200 h-full py-4 rounded-3xl flex justify-center text-3xl items-center">
                  <img
                    alt="CV"
                    className="group-hover:-translate-y-3 delay-150 duration-300"
                    width={"60%"}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADG0lEQVRoge2WS0wTURSGv9sOJj4asNaYVDC+EllpcQEbFxoWCKwUHwtMfMSEFSW6Qq26MLoURWNUIiQGTFTQmGh9gLIxGlEjrgQFDQkakVoF4qtMOy6EOkDbaZmptcl8q3vvnHvO+Xvuub2CJFDb2JKtIGoUKBpbahUiVF1VvumN0bGE0Q5rG1uyQ4iXgH3SJ38oKK/cu33LeyPjWYx0BqAgagA7ivBaUHIsKDnAbcAurNJxo+MlQcCfY2MRoQr3trJ+97ay/qDVUjEWrCj27sSR4jEqLt+dLYeoUQRFAmzj66UlJVH3fBz0rQL6AQYGPuU5HQ4UyDzReE2ZbHvL6w2PFRgR0ArW6tZL5zR7RrMHist3Z8sKkc50TAGj8mhg8OvQZoD5WVlXMyRpRjRbtQAV/qAkrXxw8WzMntGsgByiBjE1eS0ypIwZTofjRqL7VNitQfk4sDWWkaaAsWMDwKkjB1ixdHH428mm6zry+8u9prrwuKvnHe7Dx8aCa/eMZhOrz7w6eYA5s2bGn2UUbJN85C5fop5mau3XdQsVFuRNSSARbLNmUliQpyeF+G6haCx2LmDXhvW6EtCL4f8D/xpTQKoxBQDw7QO074BmF7TvhO8fDHEbD8YI6NgPA49B/gEDj6DDY4jbeNB1jYb5/HLi3NcZ0ayzuzfiumvFsmmHNqYC81wT5w5XZLskYEwF8o/CUw/4XoBjNeQfiWim55eOhjECZjthbb0hrhJFt4D+wT7Oe0/Q0fWQLyN+5trs5OeuoaJ0Dwsdi4zIMSa6BDzovIOnvpKAHAiv+YY+4X1yjbbnNzm66zTrXH9fxP9dEx9sqJqQvJqAHMDT4NbjPi50VeDX6M+Evv93TfzsTJ9ReUwb8y2UatJegK4eiHYtJkrq30IpRFcFknEtJkraVyDtBZhNnGrMJk41poBUE4cAMTw+6u59l8xcAHjV81Y9HdKyj6OJlTZgI0DloWPTTGuaKLRqmWhWIBQU+4DPhiSUGH6LVdmnZaQp4P7lutdBSVqF4Ir6OCUPMYxCs8WiFNxtvNCT/HgmJunNb3zN2MGiZTbZAAAAAElFTkSuQmCC"
                  />
                </div>
                <p className="group-hover:font-bold  group-hover:break-normal font-medium text-center uppercase text-sm group-hover:text-sky-900  ">
                  CV
                </p>
              </li>
            </div>
          </div>
        </div>
      </div>
      {/* Centro */}
    </div>
  );
}
