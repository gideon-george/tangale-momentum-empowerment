<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-6 md:py-10">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
          <h2 class="h2 font-cabinet-grotesk">Unleash your potential and empower Tangale community with TME</h2>
        </div>

        <div>

          <!-- Category buttons -->
          <div class="pb-12 md:pb-20">
            <div class="flex flex-wrap justify-center -m-1.5">
              <button class="btn-sm m-1.5 h-8 shadow" :class="category === '1' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'" @click="category = '1'">TME The Program</button>
              <button class="btn-sm m-1.5 h-8 shadow" :class="category === '2' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'" @click="category = '2'">Eligibility Criteria</button>
              <button class="btn-sm m-1.5 h-8 shadow" :class="category === '3' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'" @click="category = '3'">Values</button>
              <button class="btn-sm m-1.5 h-8 shadow" :class="category === '4' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'" @click="category = '4'">Pillars</button>
            </div>
          </div>

          <!-- Section content -->
          <div class="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">

            <!-- Content -->
            <div class="md:w-7/12 lg:w-1/2 order-1 md:order-none" data-aos="fade-up">
              <!-- Content #1 -->
              <div v-show="category === '1'">
                <h3 class="h3 font-cabinet-grotesk mb-3">Accelerating Economic Growth with TME.</h3>
                <p class="text-lg text-gray-500 mb-8">The TME Program empowers entrepreneurs in Tangale land through loan/seed capital and mentorship for innovative and scalable business ideas. Led by a philanthropic team, our goal is to drive economic growth and reduce poverty. Existing business owners can apply for our rigorous business management training and funding. Join us in creating a new breed of entrepreneurship for the development of Tangale land.</p>
                <ul class="inline-flex flex-col space-y-6">
                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Loan/Seed Capital</div>
                      <div class="text-gray-500">
                        Access funding and financial support to start or grow your business with loan and seed capital options that are tailored to your business needs and scalability.
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Business Management Training"</div>
                      <div class="text-gray-500">
                        Get equipped with essential business management skills and knowledge through our comprehensive training program that covers various aspects of business operations, such as finance, marketing, and strategic planning.
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Mentorship</div>
                      <div class="text-gray-500">
                        Gain guidance and support from experienced business leaders who have a wealth of knowledge and experience in different industries. With our mentorship program, you'll have access to valuable insights and advice that can help you navigate the challenges of starting and growing a business.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- Content #2 -->
              <div v-show="category === '2'">
                <h3 class="h3 font-cabinet-grotesk mb-3">Qualify for TME Program: Eligibility Criteria.</h3>
                <p class="text-lg text-gray-500 mb-8">
                  <ol class="inline-flex flex-col space-y-4 font-bold">
                  
  <li>Applicants must be of Tangale tribe</li>
  <li>Business should be located or operated in Billiri LGA</li>
  <li>Applicants must be 18 years of age or older</li>
  <li>Open to applicants with a scalable business idea that has been operational for over 6 months</li>
  <li>Business ideas must be for-profit and must be the original work of the applicant</li>
  <li>Current staff or family members of the TME think tank are not eligible to apply</li>
  <li>Applications containing illegal or unethical business ideas will not be considered</li>
  <li>Application must focus on one business only</li>
</ol>
.</p>
<h2 class="font-cabinet-grotesk font-bold text-2xl text-blue-500 mb-1">Two levels of selection</h2>
                <ul class="inline-flex flex-col space-y-6">
                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Level 1</div>
                      <div class="text-gray-500">
                        Based on the eligibility criteria.
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Level 2</div>
                      <div class="text-gray-500">
                       Based on business management training and pitching of the business idea.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- Content #3 -->
              <div v-show="category === '3'">
                <h3 class="h3 font-cabinet-grotesk mb-3">Values of Tangale Momentum for Empowerment.</h3>
                <p class="text-lg text-gray-500 mb-8">The Tangale Momentum for Empowerment (TME) is guided by a set of core values that inform all of our actions and decisions. These values, which include integrity, accountability, community-based, growth mindset and honesty, shape the way we work, and help us achieve our mission of empowering entrepreneurs in Tangale land, promoting economic growth and reducing poverty.</p>
                <ul class="inline-flex flex-col space-y-6">
                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Integrity:</div>
                      <div class="text-gray-500">
                        We believe that integrity is fundamental to everything we do at TME. We are committed to transparency and fairness in all of our actions and decisions, and we hold ourselves to the highest ethical standards. Our goal is to be a trusted partner for the entrepreneurs we work with and for the community as a whole.
                      </div>
                    </div>
                  </li>
                  
                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Accountability:</div>
                      <div class="text-gray-500">
                        We understand that with the role of power comes great responsibility, thus we take accountability seriously. We are committed to achieving our goals and objectives, and we work hard to ensure that our beneficiaries are satisfied.


                      </div>
                    </div>
                  </li>

                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Community-based:</div>
                      <div class="text-gray-500">
                        Our approach is driven by the principle that we are all in this together. We believe that working together as a community is the best way to bring about positive change and development for all. That is why we are dedicated to creating opportunities for people to come together and work towards a common goal.
                      </div>
                    </div>
                  </li>
                  

                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Honesty: </div>
                      <div class="text-gray-500">
                        At TME, open and honest communication is fundamental to everything we do. We believe that fostering trust and mutual respect between TME, our beneficiaries, and the broader community is essential for success. We work hard to create an environment where people feel comfortable sharing their thoughts and ideas, and we are committed to communicating openly and honestly about our actions, plans, and goals.
                      </div>
                    </div>
                  </li>
                  

                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Growth Mindset:</div>
                      <div class="text-gray-500">
                        At TME, we believe that growth is possible when you have a willing attitude to learn and adapt. We are committed to fostering a culture of hard work, dedication, and a willingness to learn and adapt in order to achieve growth and success for ourselves and our community.
                      </div>
                    </div>
                  </li>
                  

                  
                </ul>
              </div>
              <!-- Content #4 -->
              <div v-show="category === '4'">
                <h3 class="h3 font-cabinet-grotesk mb-3">Pillars of the Tangale Momentum Empowerment.</h3>
                <p class="text-lg text-gray-500 mb-8">The TME Entrepreneurship Program is built on a foundation of several key pillars designed to support and empower entrepreneurs in Tangale land. These pillars include:</p>
                <ul class="inline-flex flex-col space-y-6">
                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Mentoring and Monitoring Businesses:</div>
                      <div class="text-gray-500">
                        Through our mentorship program, we provide ongoing support and guidance to our beneficiaries to help them navigate the challenges of starting and growing a business. We also closely monitor their progress to ensure that their businesses are on track to success. Our mentors are experienced entrepreneurs who understand the unique challenges faced by small business owners and can provide valuable advice and guidance.
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Business Management Training: </div>
                      <div class="text-gray-500">
                        We provide comprehensive training on all aspects of business management, from financial management and marketing to customer service and legal compliance. Our training is designed to equip entrepreneurs with the skills and knowledge they need to succeed in the competitive business environment.
Knowledge Resources: We offer an online platform that provides entrepreneurs with access to training resources, templates, and best practices. This platform is designed to be a one-stop-shop for all the information and resources entrepreneurs need to start and grow a successful business.
                      </div>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Quarterly Business Meetings: </div>
                      <div class="text-gray-500">
                        We bring together our beneficiaries to network, share ideas, and learn from one another. These meetings provide an opportunity for entrepreneurs to connect with their peers and learn from one another's experiences.
Annual TME Entrepreneurship Forum: We organize a yearly event to showcase the businesses of our beneficiaries and connect them with potential investors and partners. The forum is an opportunity for entrepreneurs to showcase their businesses and connect with potential customers, investors, and partners.
                      </div>
                    </div>
                  </li>

                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Annual TME Entrepreneurship Forum:</div>
                      <div class="text-gray-500">
                        We organize a yearly event to showcase the businesses of our beneficiaries and connect them with potential investors and partners. The forum is an opportunity for entrepreneurs to showcase their businesses and connect with potential customers, investors, and partners.
                      </div>
                    </div>
                  </li>

                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">Loan/Seed Capital Funding:</div>
                      <div class="text-gray-500">
                        We provide financial assistance to our beneficiaries in the form of loans and seed capital. We understand that access to capital is a critical component of business success and we strive to provide our beneficiaries with the financial support they need to grow their businesses.
                      </div>
                    </div>
                  </li>

                  <li class="flex items-start">
                    <svg class="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <div>
                      <div class="font-cabinet-grotesk font-bold text-lg mb-1">TME Entrepreneurship Program Alumni Network:</div>
                      <div class="text-gray-500">
                        We foster a community of past beneficiaries to continue to support and connect with one another. The alumni network provides a platform for entrepreneurs to continue to share ideas, collaborate, and learn from one another after they have completed the program.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- Image -->
            <div class="md:w-5/12 lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
              <img class="mx-auto md:max-w-none" src="../images/hill2.jpg" width="540" height="405" alt="Features" />
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Features02',
  data: function () {
    return {
      category: '1'
    }
  },
}
</script>