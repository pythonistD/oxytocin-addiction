

export default function ProfilePage(){
    return (
<div className="flex flex-col self-stretch px-8 py-2.5 max-md:px-5">
      <div className="flex flex-col items-center p-2.5 bg-white max-md:pr-5 max-md:max-w-full">
        <div className="self-center py-2.5 max-w-full w-[632px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="shrink-0 max-w-full aspect-square w-[200px] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center self-stretch p-2.5 my-auto text-3xl text-black max-md:mt-10">
                <div className="text-4xl">John Doe</div>
                <div className="mt-2.5">Psychology Enthusiast</div>
                <div className="mt-2.5">Joined: January 2023</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2.5 mt-10 max-w-full text-black w-[424px]">
          <div className="text-4xl">Completed Tests</div>
          <div className="mt-2.5 text-3xl">
            Personality Test - 100%
            <br />
            IQ Test - 100%
            <br />
            Career Test - 100%
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-2.5 mt-2.5 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[950px]">
          <div className="self-center text-5xl text-black max-md:text-4xl">
            My Progress
          </div>
          <div className="justify-center p-2.5 mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-2.5 w-full bg-white rounded-xl max-md:mt-10 max-md:max-w-full">
                  <div className="self-center text-4xl text-black">
                    Test Completion
                  </div>
                  <div className="flex flex-col justify-center p-2.5 mt-2.5 bg-white">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="w-full aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow p-2.5 w-full bg-white rounded-xl max-md:mt-10 max-md:max-w-full">
                  <div className="self-center text-4xl text-black">
                    Test Completion
                  </div>
                  <div className="flex flex-col justify-center p-2.5 mt-2.5 bg-white">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="w-full aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}