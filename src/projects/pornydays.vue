
<template>
  <project
    v-if="this.isMounted"
    class="porny"
    v-bind:class="{ 'is-displayed': this.isDisplayed }"
  >
    <template
      v-slot:preheader
      v-bind:mediasPath="mediasPath"
      v-bind:loadNextImage="loadNextImage"
    >
      <div class="porny-deco animate-in">
        <deco-image
          v-bind:url="mediasPath+'porny_deco_01.jpg'"
          v-bind:autoLoad="false"
          v-on:loaded="loadNextImage"
          ref="imageDeco1"
          class="porny-deco__el"
        >
        </deco-image>
      </div>
    </template>

    <div
      class="project__cols project__intro porny-intro"
      v-bind:class="{ 'is-hover': this.isLogoHover, 'is-twerking': this.isLogoTwerking }"
    >
      <div
        class="project__col-left porny-intro__left"
        ref="introLeft"
      >
        <div class="porny-intro__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 235.547 112.035"
            v-on:mouseover="this.logoMouseOver"
            v-on:mouseleave="this.logoMouseLeave"
          >
            <path d="M37.632 106.732v1.012h1.726v1.332h-1.726v2.376h-1.573V105.4h3.475v1.332h-1.902zm4.748 4.72h-1.573V105.4h1.573v6.052zm2.999-1.332h1.886v1.332h-3.459V105.4h1.573v4.72zm3.464-4.72h1.549l1.228 3.232 1.3-3.232h1.565l.915 6.052h-1.573l-.441-3.483h-.016l-1.453 3.483h-.626l-1.389-3.483h-.016l-.505 3.483h-1.565l1.027-6.052zm14.261 0h1.951l-2.408 2.865 2.625 3.187h-2.039l-2.03-2.625h-.016v2.625h-1.573V105.4h1.573v2.496h.016l1.901-2.496zm8.238 0v3.401c0 .778-.032 1.55-.634 2.136-.506.498-1.3.674-2.007.674-.706 0-1.501-.176-2.006-.674-.602-.586-.634-1.355-.634-2.136V105.4h1.573v3.187c0 .786.056 1.646 1.067 1.646s1.067-.857 1.067-1.646V105.4h1.574zm1.391 0h1.573l2.881 3.699h.016V105.4h1.573v6.052h-1.573l-2.881-3.708h-.016v3.708h-1.573V105.4zm10.789 1.557c-.289-.24-.658-.4-1.043-.4-.289 0-.674.168-.674.506 0 .354.426.489.699.578l.401.119c.843.249 1.493.676 1.493 1.653 0 .603-.145 1.221-.626 1.63-.474.4-1.108.568-1.718.568a3.743 3.743 0 01-2.127-.688l.674-1.269c.393.345.859.626 1.396.626.369 0 .763-.187.763-.61 0-.441-.618-.594-.956-.689-.987-.279-1.637-.537-1.637-1.709 0-1.229.875-2.029 2.087-2.029.61 0 1.356.191 1.894.497l-.626 1.217zm4.427 4.495h-1.573v-4.72h-1.3V105.4h4.173v1.332h-1.3v4.72zm6.992-4.72v1.012h1.726v1.332h-1.726v2.376h-1.573V105.4h3.475v1.332h-1.902zm4.748 0v1.012h1.773v1.332h-1.773v1.044h1.87v1.332h-3.443V105.4h3.443v1.332h-1.87zm6.561.225c-.289-.24-.658-.4-1.043-.4-.289 0-.674.168-.674.506 0 .354.425.489.698.578l.401.119c.843.249 1.493.676 1.493 1.653 0 .603-.145 1.221-.626 1.63-.474.4-1.108.568-1.718.568a3.751 3.751 0 01-2.127-.688l.674-1.269c.393.345.859.626 1.396.626.369 0 .763-.187.763-.61 0-.441-.618-.594-.955-.689-.987-.279-1.638-.537-1.638-1.709 0-1.229.875-2.029 2.087-2.029.61 0 1.356.191 1.894.497l-.625 1.217zm4.426 4.495h-1.573v-4.72h-1.3V105.4h4.173v1.332h-1.3v4.72zm3.842 0h-1.573V105.4h1.573v6.052zm3.961-2.376l1.47-3.676h1.711l-2.584 6.052h-1.222l-2.544-6.052h1.71l1.459 3.676zm4.789 1.324l-.416 1.052h-1.67l2.326-6.052h1.719l2.279 6.052h-1.678l-.395-1.052h-2.165zm1.1-3.13h-.017l-.649 1.929h1.309l-.643-1.929zm5.597 2.85h1.887v1.332h-3.461V105.4h1.574v4.72zm30.762 0v1.332h-5.186l2.865-4.72h-2.375V105.4h5.008l-2.85 4.72h2.538zm6.561-4.72v3.401c0 .778-.033 1.55-.636 2.136-.506.498-1.301.674-2.006.674-.707 0-1.502-.176-2.008-.674-.602-.586-.635-1.355-.635-2.136V105.4h1.574v3.187c0 .786.057 1.646 1.066 1.646 1.012 0 1.065-.857 1.065-1.646V105.4h1.58zm-2.881-1.517a.783.783 0 01-.781.786h-.006a.783.783 0 01-.795-.774v-.012a.79.79 0 111.582 0zm2.054 0a.781.781 0 01-.779.786h-.008a.784.784 0 01-.795-.774v-.012a.79.79 0 111.582 0zm7.248 7.569h-1.957l-1.484-2.327h-.018v2.327h-1.572V105.4h2.353c1.196 0 2.104.568 2.104 1.86 0 .837-.465 1.558-1.323 1.709l1.897 2.483zm-3.459-3.339h.152c.514 0 1.092-.098 1.092-.756 0-.656-.578-.754-1.092-.754h-.152v1.51zm5.855 3.339h-1.573V105.4h1.573v6.052zm5.752-4.022c-.319-.433-.842-.666-1.381-.666-.963 0-1.612.738-1.612 1.678 0 .955.657 1.646 1.639 1.646.515 0 1.026-.249 1.354-.643v1.887c-.521.16-.897.279-1.389.279a3.356 3.356 0 01-2.271-.891c-.666-.603-.972-1.39-.972-2.287 0-.826.312-1.621.892-2.217a3.287 3.287 0 012.305-.979c.507 0 .972.111 1.437.305l-.002 1.888zm5.213.306V105.4h1.572v6.052h-1.572v-2.479h-2.271v2.479h-1.572V105.4h1.572v2.336h2.271zM142.088 54.811c-.279-.421-.84-.976-.518-1.545.477-.236.733.36.957.586.533.548 1.063 1.08 1.586 1.607.246-.201.602-.296.963-.331.598-.062 1.74.049 2.723.031.98-.026 5.416 1.268 5.416 1.268l3.877.972.113-.389s-.461-.445-.781-.641c-.854-.499-1.709-.992-2.566-1.481-.562-.321-2.733-2.029-3.33-2.31-.594-.28-3.645-2.432-3.715-2.764-.071-.332-.282-.919-.08-1.163.201-.248 1-.556 1.449-.602.451-.042.937-.13 3.281 1.445 2.35 1.581 4.17 2.379 4.449 2.543.279.161 2.369 1.388 2.607 1.514.241.127.629.24 1.021.013.392-.228 1.09-.825 1.053-1.204-.038-.372-1.01-5.15-1.161-5.551-.15-.401-.427-1.996-.601-2.205-.172-.212-.938-2.553-.815-2.866.119-.315.385-1.059.396-1.326.008-.264.351-1.016.651-1.047.299-.032 1.484 1.288 1.709 1.604.222.318 1.134 2.644 1.211 3.054.08.408 1.117 3.589 1.388 4.018.271.426 1.405 3.484 1.553 3.811.146.325.998 1.64 1.213 1.884.212.241.624.992 1.054.723.426-.268.727-2.907.842-3.295.111-.39.205-.952.162-1.124-.043-.174-.244-.914-.213-1.141.041-.313.151-.592.373-.812v-9.688c0-2.734.219-5.466-.293-7.577-.851-3.482-4.15-6.379-7.729-6.988-2.496-.429-4.861.369-6.324 1.251-1.514.908-2.858 2.409-3.682 4.044-.281.566-.771 1.481-.736 1.915.037.41.578.952.886 1.397.703 1.017 1.213 1.816 1.84 2.724.278.404.86.863.662 1.471-.496.181-.771-.401-1.031-.663-2.213-2.21-4.314-4.214-6.549-6.401-2.594-2.542-5.457-6.286-10.74-5.812-4.369.392-7.908 3.959-8.535 8.312-.277 1.926-.074 4.177-.074 6.402V51.57c0 2.295-.172 4.642.074 6.479.215 1.607.842 2.934 1.621 4.044 1.559 2.242 4.271 4.109 7.725 4.121 3.928.011 6.795-2.037 8.314-4.485.293-.475 1.074-2.07 1.025-2.65-.029-.389-.603-.963-.882-1.396-.7-1.093-1.206-1.921-1.839-2.872zm17.141 11.065l-2.649-.793s-1.14-.06-2.113-.071a8.01 8.01 0 001.972.762c1.018.242 2.006.317 2.951.271a1.974 1.974 0 01-.161-.169z"/>
            <path d="M155.941 60.989s-.809-.522-1.354-.695c-.549-.169-4.686-1.493-5.385-1.651-.396-.088-1.605-.44-2.668-.805.688.659 1.377 1.316 2.1 1.977.896.818 1.738 1.769 2.637 2.666.72-.068 1.361-.127 1.636-.127.678.008 2.563-.785 2.563-.785l.471-.58zM21.126 23.834c-3.578 0-7.586-.255-11.555 0-.654.042-1.491.124-2.206.292-2.367.551-4.861 2.439-6.235 5.012 2.046.263 4.056.51 4.383.571.596.124 3.157.3 3.576.479.419.18 1.909 1.132 2.385 1.191.476.062 2.861.775 3.278.836.414.057 1.011.296 1.011.296s2.623-.354 2.742-.057.178 1.728-.12 2.024c-.298.299-1.55 1.727-3.22 1.607 0 0 2.921.716 3.22.957.205.162 1.422 1.001 2.278 1.626 3.048.142 2.487 5.459-1.011 4.221-.017-.15-.03-.3-.041-.45-.728-.49-2.529-1.433-3.191-1.585-.773-.178-4.947-.594-4.947-.594l-1.37 1.191s4.171 2.74 4.648 2.859c.476.12 3.634 1.135 4.112 1.25.476.121 4.051 1.257 4.35 1.492.3.239 1.37 1.311 1.312 1.787-.061.476-1.371.476-1.671.476-.295 0-4.706-.773-5.242-.773-.537 0-4.115-.477-4.589-.655-.477-.18-5.781-2.502-5.781-2.502l-.955.477s.833 1.846 1.071 2.204c.239.358 1.552 2.148 1.909 2.564.358.413 2.384 1.966 2.504 2.501.119.536 0 1.787-.297 2.084-.297.302-1.669.478-1.669.478s-2.562-2.262-3.276-2.801c-.717-.535-2.504-1.905-2.863-2.738-.356-.838-1.131-1.729-1.131-1.729s-.656-.297-1.072-.122c-.364.157-1.173.805-1.38.974v.128l.664 1.104s1.965 1.607 1.965 2.265c0 .656-.533 1.312-.533 1.312l-.657.117-1.483-.563c-.039 1.432-.08 2.81.043 4.04.456 4.576 3.279 6.935 6.693 8.385 4.177 1.196 7.836-.25 9.937-2.354 2.086-2.084 2.869-4.7 2.869-8.757 0-1.293-.255-2.62.294-3.308.874 1.652.691 4.358 1.47 6.107 5.998-.062 10.078-2.456 13.099-5.959 2.381-2.765 4.198-6.538 4.194-11.04-.004-3.566-1.19-6.592-2.579-8.901-2.795-4.656-7.782-8.019-14.933-8.019zM105.403 63.037c-.782-.936-1.792-1.648-2.96-2.219.388-.952.664-2.038.939-3.137.633.392 1.068 1.035 1.546 1.617.466.571.983 1.119 1.47 1.691 2.286 2.688 4.059 6.006 9.491 5.443 3.919-.403 7.554-3.647 8.312-7.725.557-2.945-.273-5.38-1.537-7.064-.84.687-1.674 1.521-2.65 2.205-.861.606-2.026 1.607-3.163 1.398.168-.81 1.032-1.035 1.543-1.471 3.679-3.11 6.857-9.29 5.521-16.334-.334-1.756-1.074-3.428-1.84-4.857-2.197-4.102-6.441-7.575-11.625-8.462-2.466-.421-5.401-.292-8.315-.292-2.832 0-5.718-.213-8.61 0-3.094.226-5.759 1.69-7.418 3.902.453.027.824.057 1.009.093.825.16 4.266.48 4.733.302.47-.178 4.607-1.669 5.364-1.897.761-.226 3.186-.633 3.896-.551.71.079 3.604.091 3.606.688 0 .6-.694.616-.694.616s-1.566.763-2.231.973c-.662.21-3.715 1.025-4.152 1.396-.436.368-2.278 1.278-2.309 1.683-.034.404-.097 1.213.325 1.337.419.133 7.162 1.093 7.921 1.467.759.371 3.525 1.402 3.831 2.05.31.645.601 1.193.263 1.55-.341.356-1.925.423-2.75.261-.822-.161-5.835-1.515-6.644-1.579-.807-.062-1.632-.221-1.763.196-.125.424.571 1.003 1.347 1.472.774.468 2.601 1.256 3.215 1.351.295.051 1.299.136 2.302.264l.008-.119c1.628-1.234 3.547.575 3.09 2.574-.236 1.03-1.601 1.858-3.017 1.397a5.666 5.666 0 01-.143-.979c-.814.168-1.575.285-1.866.292-.693.015-2.406-.095-2.893-.012-.486.081-2.216-.725-2.216-.725s1.747.904 2.119 1.336c.373.438 2.021 1.356 2.347 2.101.326.744-.098 1.211-.098 1.211s-1.828-.188-3.2-.66c-1.374-.467-4.672-1.704-5.384-1.784-.711-.083-2.393-.6-2.797-.631-.404-.032-1.357.229-1.357.229s1.942 1.469 1.925 1.968c0 0 4.299-.519 5.288 1.208 0 0-.195.631-.549.889-.353.26-3.649 1.41-4.121 1.589-.467.179-1.469.147-2.604-.658-1.131-.806-2.878-2.309-3.542-2.696-.011-.008-.027-.022-.042-.03V51.5c0 2.273-.187 4.587.074 6.551.04.299.105.57.175.84-2.719.215-5.321.522-7.828.914 2.767-2.805 4.825-6.41 5.597-10.735 1.367-7.677-1.188-14.313-5.149-18.543-4.127-4.403-10.964-8.453-19.72-6.988-4.946.828-9.114 3.388-11.992 6.4-3.118 3.262-5.906 8.158-6.031 14.39 0 0-.057.379.003.856.014.763.065 1.506.15 2.229h.002s.104.213.582.372c.475.157 1.974.876 2.516 1.042s2.21.576 2.909.562c.694-.011 2.659.401 3.219.438.557.036 2.324.721 3.991 2.188 1.67 1.465 1.927 2.854 1.534 3.864-.393 1.009-2.54.211-2.54.211s2.294 1.743 3.004 2.429c.706.688.658 1.604.489 2.146-.165.545-1.271 1.164-1.271 1.164s.073-.059.188.617c.112.681-1.403 1.68-1.615 1.783-.21.104-1.579-.598-1.579-.598a.764.764 0 01.054.338c.443.219.901.428 1.383.622a18.245 18.245 0 004.08 1.366c-.006.064-.025.118-.025.188 0 .847.669 1.597 1.269 1.732.901.205 1.933-.337 2.88-.637 1.206-.377 2.371-.723 3.532-1.047a22.083 22.083 0 004.235-1.075c.179-.04.353-.085.533-.124 3.723-.812 7.887-1.822 11.875-2.191 1.69-.156 3.547-.34 5.454-.477 1.346 1.82 3.377 3.306 5.676 3.736 3.348.638 6.349-.479 8.389-2.34 1.893.89 3.465 2.221 3.192 4.961-.16 1.623-1.197 3.277-2.076 4.554-2.703 3.931-6.525 7.241-10.027 9.97-2.433 1.9-5.331 3.814-8.127 5.191-1.43.701-2.946 1.498-4.556 2.07-1.666.598-3.355 1.303-5.127 1.56-.962.139-1.972.2-2.709-.115.835-2.33 2.109-4.356 3.284-6.399 2.956-5.133 5.657-10.431 8.59-15.732.498-.9 1.64-2.243 1.612-3.285-.025-.987-1.03-1.829-2.134-1.673-.971.134-1.688 1.715-2.304 2.823a4114.808 4114.808 0 00-10.55 19.194c-.594 1.087-1.26 2.177-1.672 3.286-.308.827-.427 2.069-.172 2.881 1.162 3.684 6.351 2.86 10.087 1.672 7.868-2.34 13.698-6.886 19.711-11.759 1.391-1.126 2.688-2.485 3.977-3.862 2.487-2.648 5.088-5.674 5.766-9.971.38-2.407-.487-4.562-1.729-6.052zM62.035 42.816c2.413.945 1.126 5.184-1.617 4.266-.752-.247-1.012-.756-1.474-1.544-.295-2.054 1.322-3.414 3.091-2.722zM209.852 79.064c-1.553.033-2.694.353-4.094.635-1.104.219-2.238.371-3.344.574-6.023 1.111-11.855 2.582-17.523 4.151-.559.152-1.266.515-1.557.461-.482-.094-1.023-1.179-1.268-1.502-.445-.585-.896-1.131-1.096-1.67-.66-1.766 1.104-2.552 2.305-3.344 1.412-.933 2.875-1.843 4.672-1.667-.068 1.137-.857 1.744-.574 3.048.453 1.081 2.072 1.45 2.938.638.59-.556 1.121-2.188 1.211-3.057.229-2.24-.947-4-3.056-4.268-.569-.07-1.518-.037-1.901.062-2.14.541-3.941 1.299-5.476 2.306-1.084.709-2.364 1.762-3.055 2.824-.229.344-.377 1.032-.64 1.326-.252.286-1.006.486-1.555.749-7.521 3.579-14.734 7.305-21.557 11.354-.479.279-.959.627-1.502.746 1.635-4.287 3.365-9.231 5.129-13.545.408-.986.855-1.957.693-3.113-.414-1.043-1.982-1.506-2.881-.688-.502.455-.992 1.522-1.439 2.188-2.441 3.607-5.15 7.136-8.188 9.972-1.25 1.166-2.418 2.427-3.863 3.401 1.635-4.396 3.627-8.463 5.768-12.451.305-.568.771-1.328.75-1.899-.047-1.165-1.367-1.918-2.48-1.558-.26.086-.606.382-.805.635-.387.486-.732 1.318-1.1 2.018-.385.748-.647 1.672-1.094 2.074-.354.322-.976.549-1.502.866-.478.287-.965.642-1.438.921-4.984 2.952-10.018 6.102-15.336 8.59-2.225 1.041-4.611 2.066-7.202 2.245-.239-2.173.214-4.521.692-6.337.271-1.043.58-1.58 1.035-2.367.266-.453.521-.892.75-1.322.67-1.264 1.455-2.605 1.614-4.207.232-2.403-1.344-3.711-3.518-3.113-4.801 2.294-8.885 7.281-11.76 11.99-.989 1.609-2.156 3.445-2.536 5.416-.445 2.291 1.081 3.982 3.228 3.52 1.46-.32 2.891-1.41 4.093-2.423.919-.772 1.745-1.603 2.422-2.479.229-.295.41-.681.749-.806-.67 2.337.152 4.728 1.785 5.478.854.235 1.776.375 2.767.23 1.979-.292 3.87-1.064 5.651-1.787 5.201-2.107 9.972-5.335 14.465-7.841.437-.161.824-.675 1.269-.632-.616 1.996-2.092 4.203-2.36 6.683-.242 2.224.932 4.07 2.996 3.577.998-.24 2.028-1.092 2.883-1.73a27.14 27.14 0 002.537-2.131c1.684-1.59 3.146-3.318 4.608-4.613-1.058 2.863-2.244 5.594-3.283 8.477-2.387 1.667-5.262 3.732-7.61 5.646-1.248 1.019-3.15 1.898-2.648 4.205.301 1.388 1.404 2.629 2.305 3.691.975 1.146 1.924 2.234 3.174 2.824h1.322c1.555-.605 1.879-2.402 2.482-4.035 1.18-3.238 2.57-6.674 3.629-9.742 7.316-4.964 15.488-9.148 23.688-13.143 1.191-.578 2.351-1.288 3.635-1.674.466 1.035 1.228 1.771 1.729 2.771-2.549 1.038-6.323 2.384-7.379 4.839-.315.746-.353 1.963.058 2.654 1.815 3.068 9.104 2.178 11.875.288 1.702-1.161 2.86-3.899 1.271-5.938 4.838-1.574 10.752-2.828 16.195-3.921 1.893-.375 3.76-.872 5.592-1.149.881-.135 2.209-.147 2.996-.576 1.243-.675 1.168-2.925-.341-3.345zm-96.091 6.974c-1.622 2.081-3.511 4.03-5.821 5.418.939-2.646 2.548-4.906 4.149-6.978 1.633-2.104 3.635-3.969 5.709-5.588.093-.018.098.053.171.058-1.075 2.637-2.569 4.988-4.208 7.09zm29.628 21.614c-.672-.406-1.094-1.096-1.615-1.844-.157-.238-.475-.461-.459-.689.017-.233.697-.744 1.037-1.039 1.072-.938 2.691-2.188 3.576-2.941h.113c-.884 2.17-1.666 4.443-2.652 6.513zm39.197-17.179c-.156.896-1.871 1.139-2.881 1.332-1.154.217-2.541.54-3.633.284.92-1.159 3.727-2.385 5.42-2.881.041-.015.311-.077.402-.058.37.079.767.895.692 1.323zM193.275 30.942c.969.253 4.896 1.992 4.896 1.992s-2.316-4.051-2.729-4.485c-.162-.164-.539-.652-.941-1.232a305.49 305.49 0 01-3.588 3.239c1.124.204 2.038.405 2.362.486zm3.95 12.771c-.781-.111-2.924-.323-3.498-.724-.578-.404-3.971-1.488-4.486-1.565-.521-.075-6.822-1.906-6.822-1.906s-2.262-.862-2.338-1.775c-.078-.912.555-1.612 1.113-1.797.557-.185 3.939-.108 5.496.121s5.486.543 5.486.543-3.568-2.062-4.211-2.369c-.645-.306-3.453-1.411-3.797-1.941-.346-.523-.682-1.475.537-2.197.602-.356 2.447-.218 4.289.045-2.871-2.761-4.781-6.825-10.486-6.461-5.52.354-9.791 5.598-8.24 12.287 1.643 4.04 4.885 6.368 7.648 9.419.609.666 2.59 2.068 2.801 2.942.312 1.291 0 2.895 0 4.196 0 1.484-.076 2.964 0 4.191.145 2.307 1 4.393 2.207 5.885 1.812 2.242 5.473 4.104 9.492 3.166 3.129-.732 5.871-3.196 6.844-6.256.566-1.791.439-4 .439-6.551 0-1.267-.297-3.552 0-4.633.104-.381.771-.832 1.178-1.253.436-.446.861-.885 1.283-1.315-1.404-.636-4.312-1.959-4.935-2.052zm37.988-37.774c-1.061-3.103-2.715-5.109-5.959-5.743-4.346-.846-7.232 1.191-9.387 3.422-.678.704-7.668 7.24-14.705 13.768 1.215 1.34.137 3.146-.355 3.715-.434.499-1.93-.229-2.73-.854-1.811 1.672-3.561 3.288-5.139 4.737 1.861 1.619 4.318 3.954 4.318 3.954s5.844 3.512 6.16 3.879c.314.362 2.385 1.093 3.332.757.953-.338 3.92-2.127 3.92-2.127l4.926-3.567s.057.041.143.111c6.701-6.809 13.174-13.468 13.709-14.329 1.242-1.998 2.796-4.722 1.767-7.723z"/>
          </svg>
        </div>
        <deco-image
          v-bind:url="this.introDatas.url"
          v-bind:hdRatio="this.introDatas.hd"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="imageIntro"
          class="porny-intro__image"
        >
        </deco-image>
        <deco-image
          v-bind:url="this.introDatas.urlHover"
          v-bind:hdRatio="this.introDatas.hd"
          v-bind:autoLoad="true"
          ref="imageIntroHover"
          class="porny-intro__image-hover"
        >
        </deco-image>
      </div>
      <div class="project__col-right porny-intro__right">
        <p class="project__lead">
          Porny Days ist ein Film Kunst Festival in Zürich. Durch Filme, Debatten, Performances &amp; Workshops steht das Festival für positive Sexualität und bietet eine Alternative zu Mainstream-Pornographie.
        </p>
        <div class="project__desc">
          <p>
            In Zusammenarbeit mit <a href="http://elastiq.ch/" target="_blank" class="text-link">David Aerne</a> und als persönliches Projekt haben wir dem Festival eine komplette Überarbeitung ihrer Website angeboten.
          </p>
          <p>
            Mit dem Hauptziel der Informationsreduzierung und einer vereinfachten Darstellung des gesamten Programms hatten wir Carte Blanche,  um die neue digitale visuelle Identität des Festivals zu definieren.
          </p>
        </div>
      </div>
    </div>

    <section class="project__section project__section--padding-2x porny-lf">
      <div class="porny-lf__desc">
        <div class="project__pick">
          <h2 class="project__pick-title">
            Look&amp;Feel &amp; Bildwelt
          </h2>
          <div class="project__pick-desc">
            <p>
              Erstellen einer Website mit einfacher Struktur und starker typografischer Komponente: so war unsere ursprüngliche Motivation für dieses Nebenprojekt.
            </p>
            <p>
              Das schlichte und monochrome Layout unterstreicht die verwendete Schriftart, eine kontrastierende, verspielte und elegante Sans-Serif.
            </p>
            <p>
              Um die berühmte « Porny Touch » des verspieltes Festivals zu vermitteln haben wir dazu generatives Creative Coding beigefügt, um den Hintergrund der Website zu beleben und eine abstrakte Bildwelt zu erstellen, die elegant und dennoch explizit ist.
            </p>
          </div>
        </div>
      </div>
      <div class="porny-lf__stills">
        <div
          class="porny-lf__stills-container"
          ref="pornyStills"
        >
          <deco-image
            v-bind:url="mediasPath+'bw/porny_bw_still_01.jpg'"
            v-bind:autoLoad="false"
            v-on:loaded="loadNextImage"
            ref="porny-still-01"
            class="porny-lf__still porny-lf__still--01"
            v-bind:class="{'is-active' : this.lfCurrentID == 0}"
          >
          </deco-image>
          <deco-image
            v-bind:url="mediasPath+'bw/porny_bw_still_02.jpg'"
            v-bind:autoLoad="false"
            v-on:loaded="loadNextImage"
            ref="porny-still-02"
            class="porny-lf__still porny-lf__still--02"
            v-bind:class="{'is-active' : this.lfCurrentID == 1}"
          >
          </deco-image>
          <deco-image
            v-bind:url="mediasPath+'bw/porny_bw_still_03.jpg'"
            v-bind:autoLoad="false"
            v-on:loaded="loadNextImage"
            ref="porny-still-03"
            class="porny-lf__still porny-lf__still--03"
            v-bind:class="{'is-active' : this.lfCurrentID == 2}"
          >
          </deco-image>
          <deco-image
            v-bind:url="mediasPath+'bw/porny_bw_still_04.jpg'"
            v-bind:autoLoad="false"
            v-on:loaded="loadNextImage"
            ref="porny-still-04"
            class="porny-lf__still porny-lf__still--04"
            v-bind:class="{'is-active' : this.lfCurrentID == 3}"
          >
          </deco-image>
        </div>
      </div>
      <div class="porny-lf__sc porny-lf__sc--01">
        <div class="porny-lf__video-container">
          <media-video
            v-bind:url="this.videosPath+'porny_bw_01.mp4'"
            v-bind:poster="this.videosPath+'porny_bw_01.jpg'"
            v-bind:autoplay="true"
            v-bind:isvideo="true"
            v-bind:id="'porny-lf-1'"
            ref="porny-lf-1"
            class="porny-lf__video observed"
          >
          </media-video>
        </div>
      </div>
      <div class="porny-lf__sc porny-lf__sc--02">
        <div class="porny-lf__video-container">
          <media-video
            v-bind:url="this.videosPath+'porny_bw_02.mp4'"
            v-bind:poster="this.videosPath+'porny_bw_02.jpg'"
            v-bind:autoplay="true"
            v-bind:isvideo="true"
            v-bind:id="'porny-lf-2'"
            ref="porny-lf-2"
            class="porny-lf__video observed"
          >
          </media-video>
        </div>
      </div>
      <div class="porny-lf__sc porny-lf__sc--03">
        <div class="porny-lf__video-container">
          <media-video
            v-bind:url="this.videosPath+'porny_bw_03.mp4'"
            v-bind:poster="this.videosPath+'porny_bw_03.jpg'"
            v-bind:autoplay="true"
            v-bind:isvideo="true"
            v-bind:id="'porny-lf-3'"
            ref="porny-lf-3"
            class="porny-lf__video observed"
          >
          </media-video>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-none porny-pg">
      <div class="porny-pg__desc">
        <div class="porny-pg__desc-container">
          <div class="project__pick">
            <h2 class="project__pick-title">
              Fokus auf das Programm
            </h2>
            <div class="project__pick-desc">
              <p>
                Um einen Überblick über alles zu geben, was das Festival zu bieten hat, haben wir das Programm zum Hauptelement der Website gemacht, das vollständig direkt auf der Startseite präsentiert wird.
              </p>
              <p>
                Nach Event-Typ filterbar, das Programm erlaubt dem Benutzer durch das gesamte Angebot chronologisch und ohne Seitenwechsel zu gehen.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="porny-pg__video">
        <media-video
          v-bind:url="this.videosPath+'porny_program_8.mp4'"
          v-bind:poster="this.videosPath+'porny_program.jpg'"
          v-bind:autoplay="true"
          v-bind:isvideo="true"
          v-bind:id="'porny-pg'"
          ref="porny-pg"
          class="porny-pg__video-el observed"
        >
        </media-video>
      </div>
    </section>

    <section class="project__section project__section--padding-none porny-tc">
      <div class="porny-tc__desc">
        <div class="project__pick">
          <h2 class="project__pick-title">
            Tonalität &amp; Copy
          </h2>
          <div class="project__pick-desc">
            <p>
              Das Porny-Team ist schelmisch und nimmt sich nie zu ernst. So zum Beispiel das Slogan des Festival: « If you come, you will come again. »
            </p>
            <p>
              Um dies über die Bilder hinaus zu vermitteln, haben wir einen Redakteur beauftragt, bestimmten Schlüsselbereichen der Website einige suggestive Augenzwingkern hinzuzufügen.
            </p>
          </div>
        </div>
      </div>
      <div
        class="porny-tc__claims"
        ref="pornyClaims"
      >
        <div
          class="porny-tc__claims-container"
          ref="pornyClaimsContainer"
        >
          <deco-image
            v-bind:url="mediasPath+'claims/porny_claim_01.svg'"
            v-bind:autoLoad="false"
            v-on:loaded="loadNextImage"
            ref="porny-claim-01"
            class="porny-tc__claim"
          >
          </deco-image>
          <deco-image
            v-bind:url="mediasPath+'claims/porny_claim_02.svg'"
            v-bind:autoLoad="false"
            v-on:loaded="loadNextImage"
            ref="porny-claim-02"
            class="porny-tc__claim"
          >
          </deco-image>
          <deco-image
            v-bind:url="mediasPath+'claims/porny_claim_03.svg'"
            v-bind:autoLoad="false"
            v-on:loaded="loadNextImage"
            ref="porny-claim-03"
            class="porny-tc__claim"
          >
          </deco-image>
          <deco-image
            v-bind:url="mediasPath+'claims/porny_claim_04.svg'"
            v-bind:autoLoad="false"
            v-on:loaded="loadNextImage"
            ref="porny-claim-04"
            class="porny-tc__claim"
          >
          </deco-image>
          <deco-image
            v-bind:url="mediasPath+'claims/porny_claim_01.svg'"
            v-bind:autoLoad="false"
            v-on:loaded="loadNextImage"
            ref="porny-claim-05"
            class="porny-tc__claim"
          >
          </deco-image>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-2x project__section--colored porny-fd">
      <h2 class="project__pick-title porny-fd__title">
        Finales Design
      </h2>
      <media-image
        v-bind:url="this.mediasPath+'designs/porny_d_01.jpg'"
        v-bind:title="'Finales Design'"
        v-bind:hdRatio="2"
        v-bind:zoomable="true"
        v-bind:autoLoad="false"
        v-on:loaded="this.loadNextImage"
        ref="pornyfd1"
        class="porny-fd__screen porny-fd__screen-01"
      >
      </media-image>

        <media-image
          v-bind:url="this.mediasPath+'designs/porny_d_02.1.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="pornyfd21"
        >
        </media-image>

        <media-image
          v-bind:url="this.mediasPath+'designs/porny_d_02.2.jpg'"
          v-bind:title="'Finales Design'"
          v-bind:hdRatio="2"
          v-bind:zoomable="true"
          v-bind:autoLoad="false"
          v-on:loaded="this.loadNextImage"
          ref="pornyfd22"
        >
        </media-image>
      </div>

      <div class="project__cols porny-fd__small-screens">
        <div class="project__col-left">
          <media-image
            v-bind:url="this.mediasPath+'designs/porny_d_03.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pornyfd3"
            class="porny-fd__screen porny-fd__screen-03"
          >
          </media-image>
        </div>
        <div class="project__col-right">
          <media-image
            v-bind:url="this.mediasPath+'designs/porny_d_04.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pornyfd4"
            class="porny-fd__screen porny-fd__screen-04"
          >
          </media-image>
        </div>
        <div class="project__col-left">
          <media-image
            v-bind:url="this.mediasPath+'designs/porny_d_05.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:hdRatio="2"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pornyfd5"
            class="porny-fd__screen porny-fd__screen-05"
          >
          </media-image>
        </div>
        <div class="project__col-right">
          <media-image
            v-bind:url="this.mediasPath+'designs/porny_d_06.jpg'"
            v-bind:title="'Finales Design'"
            v-bind:zoomable="true"
            v-bind:centered="false"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pornyfd6"
            class="porny-fd__screen porny-fd__screen-06"
          >
          </media-image>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-2x project__section--colored porny-rd">
      <h2 class="project__pick-title porny-rd__title">
        Responsive Design
      </h2>
      <div class="project__mobile-thumbs">
        <div class="project__mobile-thumb project__mobile-thumb--01">
          <media-image
            v-bind:url="this.mediasPath+'designs/porny_m_01.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pornyrd1"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle">
          <media-image
            v-bind:url="this.mediasPath+'designs/porny_m_02.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pornyrd2"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right">
          <media-image
            v-bind:url="this.mediasPath+'designs/porny_m_03.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pornyrd3"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/porny_m_04.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pornyrd4"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--middle project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/porny_m_05.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pornyrd5"
          >
          </media-image>
        </div>
        <div class="project__mobile-thumb project__mobile-thumb--right project__mobile-thumb--line-2">
          <media-image
            v-bind:url="this.mediasPath+'designs/porny_m_06.jpg'"
            v-bind:title="'Responsive Design'"
            v-bind:hdRatio="2"
            v-bind:hdMinViewportWidth="375"
            v-bind:autoLoad="false"
            v-on:loaded="this.loadNextImage"
            ref="pornyrd6"
          >
          </media-image>
        </div>
      </div>
    </section>

    <section class="project__section project__section--padding-2x porny-2020">
      <div class="porny-2020__desc">
        <div class="project__pick">
          <h2 class="project__pick-title">
            2020 Ausgabe
          </h2>
          <div class="project__pick-desc">
            <p>
              Wir freuen uns jetzt darauf, die Bildwelt jedes Jahr zu aktualisieren und das Layout und die Funktionalität gezielt zu verbessern.
            </p>
            <p>
              Für die 2020 Edition haben wir eine Reihe erotischer und interaktiver Kaleidoskope erstellt, um in einer ähnlichen Bildsprache zu bleiben: abstrakt, suggestiv und fleischig.
            </p>
          </div>
        </div>
      </div>

      <div class="porny-2020__sc">
        <media-video
          v-bind:url="this.videosPath+'porny_2020_video.mp4'"
          v-bind:poster="this.videosPath+'porny_2020_video.jpg'"
          v-bind:autoplay="true"
          v-bind:isvideo="true"
          v-bind:id="'porny-2020-sc'"
          ref="porny-2020-sc"
          class="porny-2020__video-el observed"
        >
        </media-video>
      </div>
      <div class="porny-2020__stills">
        <div class="porny-2020__stills-container">
          <div class="porny-2020__still porny-2020__still--01">
            <media-image
              v-bind:url="this.mediasPath+'2020/porny_2020_01.jpg'"
              v-bind:title="'Responsive Design'"
              v-bind:hdRatio="2"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="porny20201"
            >
            </media-image>
          </div>
          <div class="porny-2020__still porny-2020__still--02">
            <media-image
              v-bind:url="this.mediasPath+'2020/porny_2020_02.jpg'"
              v-bind:title="'2020 Ausgabe'"
              v-bind:hdRatio="2"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="porny20202"
            >
            </media-image>
          </div>
          <div class="porny-2020__still porny-2020__still--03">
            <media-image
              v-bind:url="this.mediasPath+'2020/porny_2020_03.jpg'"
              v-bind:title="'2020 Ausgabe'"
              v-bind:hdRatio="2"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="porny20203"
            >
            </media-image>
          </div>
          <div class="porny-2020__still porny-2020__still--04">
            <media-image
              v-bind:url="this.mediasPath+'2020/porny_2020_04.jpg'"
              v-bind:title="'2020 Ausgabe'"
              v-bind:hdRatio="2"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="porny20204"
            >
            </media-image>
          </div>
          <div class="porny-2020__still porny-2020__still--05">
            <media-image
              v-bind:url="this.mediasPath+'2020/porny_2020_05.jpg'"
              v-bind:title="'2020 Ausgabe'"
              v-bind:hdRatio="2"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="porny20205"
            >
            </media-image>
          </div>
          <div class="porny-2020__still porny-2020__still--06">
            <media-image
              v-bind:url="this.mediasPath+'2020/porny_2020_06.jpg'"
              v-bind:title="'2020 Ausgabe'"
              v-bind:hdRatio="2"
              v-bind:autoLoad="false"
              v-on:loaded="this.loadNextImage"
              ref="porny20206"
            >
            </media-image>
          </div>
        </div>
      </div>
    </section>

    <div class="porny-cta-container">
      <a href="https://archive-2019.pornydays.love/" target="_blank" class="cta cta--small porny-cta">2019 Ausgabe</a>
      <a href="https://www.pornydays.love/" target="_blank" class="cta cta--small porny-cta">2020 Ausgabe</a>
    </div>

    <div class="project__credits">
      <h2 class="project__credits-title">
        Akkreditiv
      </h2>
      <div class="project__credits-desc">
        <p>
          Full-Stack Zusammenarbeit &amp; teschnische Leitung  – David Aerne<br>
          Copy –  Cédric Knapp
        </p>
      </div>
    </div>

  </project>
</template>

<script>
  import Vue from "vue";
  import Project from '../components/project-detail.vue';
  import projectsMixins from '../mixins/projects';
  import DecoImage from '../components/deco-image.vue';
  import MediaImage from '../components/media-image.vue';
  import MediaVideo from '../components/media-video.vue';
  import debounce from 'lodash/debounce';

  export default Vue.extend({
    components: {
      'project': Project,
      'deco-image': DecoImage,
      'media-image': MediaImage,
      'media-video': MediaVideo
    },
    mixins: [projectsMixins],
    data: function () {
      return {
        mediasPath: "https://files.daviddarx.com/works/static/projects/porny/",
        videosPath: 'https://files.daviddarx.com/works/videos/',
        windowW: 0,
        windowH: 0,
        isLogoHover: false,
        isLogoTwerking: false,
        logoTwerkingInterval: undefined,
        logoTwerkingIntervalDuration: 5000,
        logoTwerkingTimeoutDuration: 1000,
        lfCurrentID: 0,
        lfInterval: undefined,
        lfIntervalDuration: 6000,
        lfTimeoutDuration: 250,
        clCurrentID: 0,
        clInterval: undefined,
        clIntervalDuration: 4000,
        clTimeoutDuration: 500,
      }
    },
    computed: {
      introDatas: function () {
        const windowW = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let datas = {};

        if (windowW > 1440 || (windowW == 1440 && window.devicePixelRatio > 1)) {
          datas.url = this.mediasPath+'intro_hd.jpg';
          datas.urlHover = this.mediasPath+'intro_hover_hd.jpg';
          datas.hd = 1;
        } else {
          datas.url = this.mediasPath+'intro.jpg';
          datas.urlHover = this.mediasPath+'intro_hover.jpg';
          datas.hd = 2;
        }

        return datas;
      }
    },
    mounted () {
      this.mount();

      requestAnimationFrame(this.customResize);

      this.logoTwerkingInterval = setInterval(this.twerkLogo, this.logoTwerkingIntervalDuration);

      this.startLfInterval();
      this.startClInterval();
    },
    beforeDestroy () {
      this.destroy();

      clearInterval(this.logoTwerkingInterval);

      this.stopLfInterval();
      this.stopClInterval();
    },
    methods: {
      customResize: function () {
        this.$refs.pornyClaims.style.setProperty('--claim-width', + this.$refs.pornyClaims.offsetWidth + 'px');
      },
      twerkLogo: function () {
        this.isLogoTwerking = true;
        setTimeout(() => {
          this.isLogoTwerking = false;
        }, this.logoTwerkingTimeoutDuration);
      },
      logoMouseOver: function () {
        this.isLogoHover = true;
      },
      logoMouseLeave: function () {
        this.isLogoHover = false;
      },
      startLfInterval: function () {
        this.lfInterval = setInterval(() => {

          const currentID = this.lfCurrentID;
          this.lfCurrentID = -1;

          setTimeout(() => {
            this.lfCurrentID = currentID + 1;
            if (this.lfCurrentID > 3) {
              this.lfCurrentID = 0;
            }
          }, this.lfTimeoutDuration);
        }, this.lfIntervalDuration);
      },
      stopLfInterval: function () {
        clearInterval(this.lfInterval);
      },
      startClInterval: function () {
        this.clInterval = setInterval(() => {

          this.clCurrentID += 1;

          if (this.clCurrentID == 4) {
            setTimeout(() => {

              this.$refs.pornyClaimsContainer.classList.add('no-transition');

              requestAnimationFrame(() => {
                this.clCurrentID = 0;

                this.$refs.pornyClaims.style.setProperty('--current-id', + this.clCurrentID);

                requestAnimationFrame(() => {
                  this.$refs.pornyClaimsContainer.classList.remove('no-transition');
                });
              });
            }, this.clTimeoutDuration);
          }

          this.$refs.pornyClaims.style.setProperty('--current-id', + this.clCurrentID);
        }, this.clIntervalDuration);
      },
      stopClInterval: function () {
        clearInterval(this.clInterval);
      }
    }
  });
</script>

<style lang="scss">
  @import '../scss/assets.scss';

  .porny {
    --c-border: #bb9c9c;
  }

  .porny-deco {
    &__el {
      position: absolute;
      z-index: 100;
      top: 0;
      right: 0;
      width: 100%;
      max-width: 1228px;
      transform: translate(20%, -55%);
      animation: deco 10s ease-in-out infinite alternate;
    }
  }

  @keyframes deco {
    from {
      transform: translate(20%, -55%);
    }

    to {
      transform: translate(18%, -57%);
    }
  }

  .porny-intro {
    $root: #{&};

    position: relative;

    &__left {
      left: calc(var(--s-gutter) * -1);
      padding: 0;
      background-color: var(--project-color);
    }

    &__right {
      position: relative;
      margin-top: -0.3em;
      padding-bottom: calc(var(--s-gutter) * 2);
    }

    &__logo {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        --posX: 50%;
        --posY: 50%;

        z-index: 2;
        width: 50%;
        fill: var(--project-color);
        cursor: pointer;

        #{$root}.is-twerking & {
          animation: twerk-logo 400ms cubic-bezier(0.3, 0.7, 0, 1.5) both;
        }
      }
    }

    &__image {
      mix-blend-mode: multiply;
    }

    &__image-hover {
      --opacity: 0;

      position: absolute;
      top: 0;
      left: 0;
      pointer-events: none;
      opacity: 0;

      #{$root}.is-hover & {
        --opacity: 1;

        transition-duration: 2s;
      }
    }
  }

  @keyframes twerk-logo {
    10%,
    90% {
      transform: translate3d(0, 1px, 0) rotate(-1deg) translateY(-21%);
      transform-origin: 150% 50%;
    }

    20%,
    80% {
      transform: translate3d(0, 1px, 0) rotate(2deg) translateY(-21%);
      transform-origin: -50% 50%;
    }

    30%,
    50%,
    70% {
      transform: translate3d(0, -2px, 0) rotate(-2deg) translateY(-21%);
      transform-origin: 150% 50%;
    }

    40%,
    60% {
      transform: translate3d(0, 2px, 0) rotate(2deg) translateY(-21%);
      transform-origin: -50% 50%;
    }
  }

  .porny-lf {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 0;

    &__stills {
      flex-shrink: 0;
      flex-basis: 60%;
    }

    &__stills-container {
      position: relative;
      z-index: -1;
      width: 100%;
      height: 100%;
      animation: lf-stills 15s ease-in-out both infinite;
    }

    &__still {
      --opacity: 0;
      --additional-transform: scale(1);

      position: absolute;
      width: var(--width);
      max-width: var(--max-width);
      transition-duration: 0.25s;
      transform: translate(var(--posX), var(--posY)) var(--additional-transform);

      &.is-active {
        --opacity: 1;
      }

      &--01 {
        --max-width: 1226px;
        --width: 110%;
        --posX: 10%;
        --posY: -20%;
      }

      &--02 {
        --additional-transform: scaleX(-1);
        --max-width: 1206px;
        --width: 110%;
        --posX: 10%;
        --posY: -20%;
      }

      &--03 {
        --max-width: 1039px;
        --width: 110%;
        --posX: 15%;
        --posY: -20%;
      }

      &--04 {
        --max-width: 957px;
        --width: 110%;
        --posX: 15%;
        --posY: -20%;
      }
    }

    &__desc {
      flex-shrink: 0;
      flex-basis: 40%;
      padding-bottom: calc(var(--s-gutter) * 1.5);
    }

    &__sc {
      --s-delay-y: calc(var(--s-gutter) * 1);

      position: relative;
      flex-shrink: 0;
      width: 33.33%;

      &--02 {
        margin-top: calc(var(--s-gutter) * -1);
        transform: translateX(-1px);
      }

      &--03 {
        transform: translateX(-2px);
        margin-top: calc(var(--s-gutter) * -2);
      }
    }

    &__video-container {
      border: 1px solid var(--c-border);
    }
  }

  @keyframes lf-stills {
    0%,
    100% {
      transform: translate3d(0, 0, 0);
    }

    33% {
      transform: translate3d(-1%, 1%, 0);
    }

    66% {
      transform: translate3d(1%, -1%, 0);
    }
  }

  .porny-pg {
    display: flex;
    padding-top: calc(var(--s-gutter) * 2);

    &__desc {
      position: relative;
      flex-basis: 50%;
    }

    &__desc-container {
      position: absolute;
      bottom: 0;
      padding: calc(var(--s-gutter) * 2);
      padding-top: 0;

      p:last-child {
        margin-bottom: 0;
      }
    }

    &__video {
      flex-basis: 50%;
      box-sizing: border-box;
      border: 1px solid var(--c-border);
    }
  }

  .porny-tc {
    display: flex;

    &__desc {
      order: 2;
      flex-basis: 50%;
      box-sizing: border-box;
      padding: calc(var(--s-gutter) * 2);
    }

    &__claims {
      --claim-width: 20px;
      --current-id: 0;

      position: relative;
      order: 1;
      width: var(--claim-width);
      flex-basis: 50%;
      flex-shrink: 0;
      flex-grow: 0;
      overflow: hidden;
      background-color: black;
    }

    &__claims-container {
      display: flex;
      width: calc(var(--claim-width) * 5);
      transform: translateX(calc(var(--claim-width) * var(--current-id) * -1));
      transition: transform var(--e-inout) 0.5s;

      &.no-transition {
        transition-duration: 0s;
      }
    }

    &__claim {
      width: var(--claim-width);
    }
  }

  .porny-fd {
    --c-background: rgba(0, 0, 0, 0.1);

    padding-bottom: calc(var(--s-gutter) * 4);

    @include viewport('tablet') {
      padding-bottom: calc(var(--s-gutter) * 4);
    }

    &__title {
      text-align: center;
      margin-bottom: calc(var(--s-gutter) * 1.6);

      @include viewport('tablet') {
        margin-bottom: calc(var(--s-gutter) * 1);
      }

      @include viewport('tablet') {
        padding-top: calc(var(--s-gutter) * 0.25);
      }

      @include viewport('mobile-l') {
        padding-top: calc(var(--s-gutter) * 0.75);
      }
    }

    &__screen-01 {
      margin-bottom: calc(var(--s-gutter) * 2);
    }

    &__screen-02 {
      max-width: 1440px;
      margin: 0 auto;
    }

    &__screen-03,
    &__screen-04 {
      margin-bottom: calc(var(--s-gutter-col) * 2);

      @include viewport('tablet') {
        margin-bottom: 0;
      }
    }

    &__screen-04,
    &__screen-06 {
      transform: translateY(calc(var(--s-gutter) * 2));

      @include viewport('tablet') {
        transform: translateY(0);
      }
    }

    &__small-screens {
      margin-top: calc(var(--s-gutter) * 2);

      @include viewport('tablet') {
        display: block;

        & > div {
          padding: 0;
          margin-top: var(--s-gutter);
        }
      }
    }
  }

  .porny-rd {
    --c-background: #1a1a1a;

    position: relative;
    color: var(--project-color);
    text-align: center;
    padding-top: calc(var(--s-gutter) * 2);
    padding-bottom: calc(var(--s-gutter) * 4);

    &__title {
      @include anti-aliased();

      margin-bottom: calc(var(--s-gutter) * 0.75);

      @include viewport('tablet-s') {
        margin-top: var(--s-gutter);
      }

      @include viewport('mobile-s') {
        margin-top: calc(var(--s-gutter) * 3);
      }
    }

    .project__mobile-thumb {
      position: relative;
      z-index: 101;
    }

    .media-image {
      --outline-final: 1px solid rgba(250, 208, 209, 0.25);
    }
  }

  .porny-2020 {
    --s-bg-padding: calc(var(--s-gutter) * 2);

    padding-top: calc(var(--s-gutter) * 3);

    &__desc {
      width: 50%;
      margin-left: 50%;
      padding-bottom: var(--s-bg-padding);

      p:last-child {
        margin-bottom: 0;
      }
    }

    &__sc,
    &__stills {
      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        width: 100vw;
        left: calc(var(--s-bg-padding) * -1);
        background-color: white;
      }
    }

    &__sc {
      position: relative;

      &::before {
        height: 50%;
        bottom: 0;
      }
    }

    &__stills {
      --margin: calc(var(--s-gutter-col) * 2);

      position: relative;
      padding-top: var(--s-bg-padding);
      padding-bottom: var(--s-bg-padding);

      &::before {
        height: 100%;
        top: 0;
      }
    }

    &__stills-container {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      width: calc(100% + var(--margin) * 2);
      left: calc(var(--margin) * -1);
      padding-bottom: calc(var(--margin) * 4);
    }

    &__still {
      flex-basis: 33.33%;
      flex-shrink: 1;
      box-sizing: border-box;
      padding: var(--margin);

      &--01,
      &--02,
      &--03 {
        padding-top: 0;
      }

      &--04,
      &--05,
      &--06 {
        padding-bottom: 0;
      }

      &--02,
      &--05 {
        transform: translateY(calc(var(--margin) * 2));
      }

      &--03,
      &--06 {
        transform: translateY(calc(var(--margin) * 4));
      }
    }
  }

  .porny-cta-container {
    text-align: center;
  }

</style>
