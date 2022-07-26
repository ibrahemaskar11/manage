const Features = ()=>{
    return (
      <section id="features">
        <div className="container flex flex-col mx-auto px-4 mt-10 space-y-12 md:space-y-0 md:space-x-2 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl  font-bold text-center md:text-left">
              What's diffrent about Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>
          <ul className="flex flex-col space-y-8 md:w-1/2 ">
            <li className="flex flex-col space-y-3 md:space-y-0 md:space-x-6">
              <div className="rounded-l-full flex flex-row items-center bg-brightRedSupLight  md:bg-transparent">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 ml-6 md:mt-3">
                  Track company-wide progress
                </h3>
              </div>
              <div>
                <p className="text-darkGrayishBlue max-w-md ">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </li>
            <li className="flex flex-col space-y-3 md:space-y-0 md:space-x-6">
              <div className="rounded-l-full flex flex-row items-center bg-brightRedSupLight  md:bg-transparent">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 ml-6 md:mt-3">
                  Advanced built-in reports
                </h3>
              </div>
              <div>
                <p className="text-darkGrayishBlue max-w-md ">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </li>
            <li className="flex flex-col space-y-3 md:space-y-0 md:space-x-6">
              <div className="rounded-l-full flex flex-row items-center bg-brightRedSupLight  md:bg-transparent">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 ml-6 md:mt-3">
                  Everything you need in one place
                </h3>
              </div>
              <div>
                <p className="text-darkGrayishBlue max-w-md ">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
}
export default Features