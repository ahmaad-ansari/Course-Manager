import React, { useState, useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { getAccount } from '../api/account';

const Details = () => {

  const { currentColor, loginInfo } = useStateContext(); 
  
  const [account, setAccount] = useState();
  useEffect(() => {
    async function fetchData() {
        let res = await getAccount({ account_id: loginInfo.account_id });
        setAccount(res.data[0]);
    }
    fetchData();
  }, [loginInfo.account_id]);


  return (
    <div className="mt-12">
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-1080">
          <div class="overflow-x-auto relative sm:rounded-lg w-1080">
            <div class="mb-6">
                <label for="account_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account ID</label>
                <input type="text" id="account_id" aria-label="disabled input 2" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" value={account?.account_id} disabled readonly />
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                  <input type="text" id="first_name" aria-label="disabled input 2" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" value={account?.first_name} disabled readonly />
              </div>
              <div>
                  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                  <input type="text" id="last_name" aria-label="disabled input 2" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" value={account?.last_name} disabled readonly />
              </div>
              <div>
                  <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                  <input type="text" id="username" aria-label="disabled input 2" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" value={account?.username} disabled readonly />
              </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                  <label for="birthdate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthdate</label>
                  <input type="text" id="birthdate" aria-label="disabled input 2" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" value={account?.birthdate.substring(0,10)} disabled readonly />
              </div>
              
              <div>
                  <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                  <input type="text" id="phone" aria-label="disabled input 2" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" value={account?.phone} disabled readonly />
              </div>
            </div>
            <div class="mb-6">
              <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
              <input type="text" id="address" aria-label="disabled input 2" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" value={account?.address} disabled readonly />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details