                  <div className="">
                    {console.log(input)}
                  </div>

<div className="button">
            <button
              className="button_content"
              onClick={() => console.log(getData())}
            >
              Explore Now, avoid caplocks
            </button>
            <div className="mt-6">
              <textarea
                id="about"
                name="about"
                rows={20}
                className="hover:shadow:md mt-1 block w-full rounded-md shadow-xl shadow-sm focus:ring-blue-500 sm:text-sm"
                value={JSON.stringify(data, null, 2)}
                readOnly
              />
            </div>
          </div>
