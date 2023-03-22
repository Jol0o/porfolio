import React from "react";

export default function Timeline() {
  return (
    <section class="flex min-h-screen justify-center bg-gray-100 pt-20">
      <div class="w-80">
        <h2 class="text-xl text-gray-700 mb-7">Recent Updates</h2>
        <ul>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-gray-400"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-600">18-8-2022</p>
              <p class="mt-2 text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maiores incidunt blanditiis dignissimos, enim earum mollitia.
              </p>
            </div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-gray-400"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-600">18-8-2022</p>
              <p class="mt-2 text-gray-600 text-sm">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </li>
          <li class="relative flex items-baseline gap-6 pb-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                class="bi bi-circle-fill fill-gray-400"
                viewBox="0 0 16 16"
              >
                <circle cx="8" cy="8" r="8" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-gray-600">18-8-2022</p>
              <p class="mt-2 text-gray-600 text-sm">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
