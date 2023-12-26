{
  /* <Form {...form}>
<form
  onSubmit={handleSubmit(processForm)}
  className="space-y-10  w-[100%] sm:w-[550px] md:w-auto  "
>
  {currentStep === 0 && (
    <motion.div
      initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div>
        <div className="my-5">
          <Label className="text-base font-semibold leading-7 ">
            Student Information
          </Label>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Provide Student Information details.
          </p>
        </div>
        <div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 ">
            <div className="">
              <FormField
                control={form.control}
                name="nationality"
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      nationality
                    </FormLabel>
                    <FormControl className="bg-slate-500 ">
                      <>
                        <select
                          id="nationality"
                          {...register('nationality')}
                          // autoComplete="nationality-name"
                          className="w-full   rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset
                         ring-gray-300 focus:ring-2 focus:ring-inset
                          focus:ring-sky-600  sm:text-sm sm:leading-6"
                        >
                          <option
                            disabled
                            className="text-gray-200 text-sm"
                          >
                            Select your nationality
                          </option>
                          <option>Saudi Arabia</option>
                          <option>Egypt</option>
                          <option>Korean</option>
                        </select>
                        {errors.nationality?.message && (
                          <p className="mt-2 text-sm text-red-400">
                            {errors.nationality.message}
                          </p>
                        )}
                      </>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="studentNationalID "
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      Student National ID
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={'studentNationalID'}
                        {...register('studentNationalID')}
                        className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                      />
                    </FormControl>

                    {errors.studentNationalID?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.studentNationalID.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="passportNumber "
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      Passport Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={'passportNumber'}
                        {...register('passportNumber')}
                        className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                      />
                    </FormControl>

                    {errors.passportNumber?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.passportNumber.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      First name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={'firstName'}
                        {...register('firstName')}
                        className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                      />
                    </FormControl>

                    {errors.firstName?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.firstName.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <div className="sm:col-span-3">
              <FormField
                control={form.control}
                name="middleName"
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      Middle name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={'middleName'}
                        {...register('middleName')}
                        className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                      />
                    </FormControl>

                    {errors.middleName?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.middleName.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <div className="sm:col-span-3">
              <FormField
                control={form.control}
                name="thirdName"
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      Third name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={'thirdName'}
                        {...register('thirdName')}
                        className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                      />
                    </FormControl>

                    {errors.thirdName?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.thirdName.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <div className="sm:col-span-3">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      Last name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={'lastName'}
                        {...register('lastName')}
                        className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                      />
                    </FormControl>

                    {errors.lastName?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.lastName.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <FormField
                control={form.control}
                name="arabicfirstName"
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      First name (Arabic)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={'arabicfirstName'}
                        {...register('arabicfirstName')}
                        className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                      />
                    </FormControl>

                    {errors.arabicfirstName?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.arabicfirstName.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <div className="sm:col-span-3">
              <FormField
                control={form.control}
                name="arabicmiddleName"
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      Middle name (Arabic)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={'arabicmiddleName'}
                        {...register('arabicmiddleName')}
                        className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                      />
                    </FormControl>

                    {errors.arabicmiddleName?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.arabicmiddleName.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <div className="sm:col-span-3">
              <FormField
                control={form.control}
                name="arabicthirdName"
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      Third name (Arabic)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={'arabicthirdName'}
                        {...register('arabicthirdName')}
                        className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                      />
                    </FormControl>

                    {errors.arabicthirdName?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.arabicthirdName.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>

            <div className="sm:col-span-3">
              <FormField
                control={form.control}
                name="arabiclastName"
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      Last name (Arabic)
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={'arabiclastName'}
                        {...register('arabiclastName')}
                        className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                      />
                    </FormControl>

                    {errors.arabiclastName?.message && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.arabiclastName.message}
                      </p>
                    )}
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="sm:col-span-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="bg-transparent">
                  <FormLabel className="block text-sm font-medium leading-6 ">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={'email'}
                      {...register('email')}
                      className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                    />
                  </FormControl>

                  {errors.email?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>

4          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Notify me about...</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    // defaultValue={field.value}
                    {...register('gender')}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="all" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        All new messages
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="none" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Nothing
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                {errors.gender?.message && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.gender.message}
                  </p>
                )}
              </FormItem>
            )}
          /> */
}
{
  /* date  */
}
{
  /* <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-[240px] pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      ={field.value}
                      onSelect={field.onChange}
                      {...register('date')}
                      disabled={(date: any) =>
                        date > new Date() ||
                        date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> 
4          <div className="sm:col-span-3">
            <FormField
              control={form.control}
              name="placeofBirth"
              render={({ field }) => (
                <FormItem className="bg-transparent">
                  <FormLabel className="block text-sm font-medium leading-6 ">
                    Place of Birth
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={'placeofBirth'}
                      {...register('placeofBirth')}
                      className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                    />
                  </FormControl>

                  {errors.placeofBirth?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.placeofBirth.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>
          <div className="sm:col-span-3">
            <FormField
              control={form.control}
              name="currentSchoolName"
              render={({ field }) => (
                <FormItem className="bg-transparent">
                  <FormLabel className="block text-sm font-medium leading-6 ">
                    Current SchoolName
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={'currentSchoolName'}
                      {...register('currentSchoolName')}
                      className="mt-10  p-4 h-14  text-sm md:text-lg font-normal capitalize"
                    />
                  </FormControl>

                  {errors.currentSchoolName?.message && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.currentSchoolName.message}
                    </p>
                  )}
                </FormItem>
              )}
            />
          </div>

          <div className="mt-10 gap-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            <div className="">
              <FormField
                control={form.control}
                name="religion"
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      Religion
                    </FormLabel>
                    <FormControl>
                      <>
                        <select
                          id="religion"
                          {...register('religion')}
                          // autoComplete="religion-name"
                          className=" placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option
                            disabled
                            className="text-gray-200 text-sm"
                          >
                            Select your Religion
                          </option>
                          <option>Muslim</option>
                          <option>Christian</option>
                        </select>
                        {errors.religion?.message && (
                          <p className="mt-2 text-sm text-red-400">
                            {errors.religion.message}
                          </p>
                        )}
                      </>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="currentGrade"
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      Current Grade
                    </FormLabel>
                    <FormControl>
                      <>
                        <select
                          id="currentGrade"
                          {...register('currentGrade')}
                          // autoComplete="currentGrade-name"
                          className=" placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option
                            disabled
                            className="text-gray-200 text-sm"
                          >
                            Select your currentGrade
                          </option>
                          <option>Excellent</option>
                          <option>Very Good</option>
                          <option>Good </option>
                          <option>none</option>
                        </select>
                        {errors.currentGrade?.message && (
                          <p className="mt-2 text-sm text-red-400">
                            {errors.currentGrade.message}
                          </p>
                        )}
                      </>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="enrolmentYear"
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      Enrolment Year
                    </FormLabel>
                    <FormControl>
                      <>
                        <select
                          id="enrolmentYear"
                          {...register('enrolmentYear')}
                          // autoComplete="enrolmentYear-name"
                          className=" placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option
                            disabled
                            className="text-gray-200 text-sm"
                          >
                            Select Enrolment Year
                          </option>
                          <option>2016-2017</option>
                          <option>2017-2018</option>
                          <option>2018-2019</option>
                          <option>2019-2020</option>
                          <option>2020-2021</option>
                          <option>2021-2022</option>
                          <option>2022-2023</option>
                          <option>2023-2024</option>
                        </select>
                        {errors.enrolmentYear?.message && (
                          <p className="mt-2 text-sm text-red-400">
                            {errors.enrolmentYear.message}
                          </p>
                        )}
                      </>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="applyingforGrade"
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      Applying for Grade
                    </FormLabel>
                    <FormControl>
                      <>
                        <select
                          id="applyingforGrade"
                          {...register('applyingforGrade')}
                          // autoComplete="applyingforGrade-name"
                          className=" placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option
                            disabled
                            className="text-gray-200 text-sm"
                          >
                            Select Grade
                          </option>
                          <option>Grade 12</option>
                          <option>Grade 11</option>
                          <option>Grade 12</option>
                          <option>Grade 12</option>
                          <option>Grade 13</option>
                        </select>
                        {errors.applyingforGrade?.message && (
                          <p className="mt-2 text-sm text-red-400">
                            {errors.applyingforGrade.message}
                          </p>
                        )}
                      </>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="DAS"
                render={({ field }) => (
                  <FormItem className="bg-transparent">
                    <FormLabel className="block text-sm font-medium leading-6 ">
                      DAS
                    </FormLabel>
                    <FormControl>
                      <>
                        <select
                          id="DAS"
                          {...register('DAS')}
                          // autoComplete="DAS-name"
                          className=" placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option
                            disabled
                            className="text-gray-200 text-sm"
                          >
                            Select
                          </option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                        {errors.DAS?.message && (
                          <p className="mt-2 text-sm text-red-400">
                            {errors.DAS.message}
                          </p>
                        )}
                      </>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )}

  {currentStep === 1 && (
    <motion.div
      initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <h2 className="text-base font-semibold leading-7 ">Address</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Address where you can receive mail.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium leading-6 "
          >
            Country
          </label>
          <div className="mt-2">
            <select
              id="country"
              {...register('country')}
              autoComplete="country-name"
              className=" placeholder:text-gray-300 placeholder:text-sm block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
            {errors.country?.message && (
              <p className="mt-2 text-sm text-red-400">
                {errors.country.message}
              </p>
            )}
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="street"
            className="block text-sm font-medium leading-6 "
          >
            Street address
          </label>
          <div className="mt-2">
            <Input
              type="text"
              id="street"
              {...register('street')}
              autoComplete="street-address"
              className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
            {errors.street?.message && (
              <p className="mt-2 text-sm text-red-400">
                {errors.street.message}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 "
          >
            City
          </label>
          <div className="mt-2">
            <Input
              type="text"
              id="city"
              {...register('city')}
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
            {errors.city?.message && (
              <p className="mt-2 text-sm text-red-400">
                {errors.city.message}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="state"
            className="block text-sm font-medium leading-6 "
          >
            State / Province
          </label>
          <div className="mt-2">
            <Input
              type="text"
              id="state"
              {...register('state')}
              autoComplete="address-level1"
              className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
            {errors.state?.message && (
              <p className="mt-2 text-sm text-red-400">
                {errors.state.message}
              </p>
            )}
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="zip"
            className="block text-sm font-medium leading-6 "
          >
            ZIP / Postal code
          </label>
          <div className="mt-2">
            <Input
              type="text"
              id="zip"
              {...register('zip')}
              autoComplete="postal-code"
              className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
            {errors.zip?.message && (
              <p className="mt-2 text-sm text-red-400">
                {errors.zip.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )}
  {currentStep === 2 && (
    <>
      <h2 className="text-base font-semibold leading-7 ">Complete</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Thank you for your submission.
      </p>
    </>
  )}
</form>
</Form> */
}
