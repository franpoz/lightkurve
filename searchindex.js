Search.setIndex({docnames:["api/index","api/lightcurve","api/prf","api/targetpixelfile","api/utils","community_software","contributing","index","install","tutorials/.ipynb_checkpoints/how-to-find-a-kepler-planet-with-lightkurve-checkpoint","tutorials/.ipynb_checkpoints/lightcurve-files-checkpoint","tutorials/index","tutorials/lightcurve-files","tutorials/motion-correction/.ipynb_checkpoints/replicate-vanderburg-2014-k2sff-checkpoint","tutorials/target-pixel-files"],envversion:53,filenames:["api/index.rst","api/lightcurve.rst","api/prf.rst","api/targetpixelfile.rst","api/utils.rst","community_software.rst","contributing.rst","index.rst","install.rst","tutorials/.ipynb_checkpoints/how-to-find-a-kepler-planet-with-lightkurve-checkpoint.ipynb","tutorials/.ipynb_checkpoints/lightcurve-files-checkpoint.ipynb","tutorials/index.rst","tutorials/lightcurve-files.ipynb","tutorials/motion-correction/.ipynb_checkpoints/replicate-vanderburg-2014-k2sff-checkpoint.ipynb","tutorials/target-pixel-files.ipynb"],objects:{"lightkurve.lightcurve":{KeplerCBVCorrector:[1,1,1,""],KeplerLightCurve:[1,1,1,""],KeplerLightCurveFile:[1,1,1,""],LightCurve:[1,1,1,""],SFFCorrector:[1,1,1,""],SPLDCorrector:[1,1,1,""],box_period_search:[1,4,1,""],iterative_box_period_search:[1,4,1,""]},"lightkurve.lightcurve.KeplerCBVCorrector":{coeffs:[1,2,1,""],correct:[1,3,1,""],get_cbv_url:[1,3,1,""],get_cbvs_list:[1,3,1,""],lc_file:[1,2,1,""],opt_result:[1,2,1,""]},"lightkurve.lightcurve.KeplerLightCurve":{correct:[1,3,1,""],to_fits:[1,3,1,""]},"lightkurve.lightcurve.KeplerLightCurveFile":{PDCSAP_FLUX:[1,2,1,""],SAP_FLUX:[1,2,1,""],cadenceno:[1,2,1,""],campaign:[1,2,1,""],channel:[1,2,1,""],compute_cotrended_lightcurve:[1,3,1,""],get_lightcurve:[1,3,1,""],hdu:[1,2,1,""],header:[1,3,1,""],keplerid:[1,2,1,""],mission:[1,2,1,""],plot:[1,3,1,""],quarter:[1,2,1,""],time:[1,2,1,""]},"lightkurve.lightcurve.LightCurve":{bin:[1,3,1,""],cdpp:[1,3,1,""],flatten:[1,3,1,""],fold:[1,3,1,""],normalize:[1,3,1,""],plot:[1,3,1,""],remove_nans:[1,3,1,""],remove_outliers:[1,3,1,""],stitch:[1,3,1,""],to_csv:[1,3,1,""],to_pandas:[1,3,1,""],to_table:[1,3,1,""]},"lightkurve.lightcurve.SFFCorrector":{arclength:[1,3,1,""],bin_and_interpolate:[1,3,1,""],breakpoints:[1,3,1,""],correct:[1,3,1,""],fit_bspline:[1,3,1,""],rotate_centroids:[1,3,1,""]},"lightkurve.lightcurve.SPLDCorrector":{correct:[1,3,1,""]},"lightkurve.prf":{KeplerPRF:[2,1,1,""],PRFPhotometry:[2,1,1,""],SceneModel:[2,1,1,""],SimpleKeplerPRF:[2,1,1,""],get_initial_guesses:[2,4,1,""]},"lightkurve.prf.KeplerPRF":{evaluate:[2,3,1,""],plot:[2,3,1,""]},"lightkurve.prf.PRFPhotometry":{fit:[2,3,1,""],get_residuals:[2,3,1,""]},"lightkurve.prf.SceneModel":{evaluate:[2,3,1,""],gradient:[2,3,1,""],plot:[2,3,1,""]},"lightkurve.prf.SimpleKeplerPRF":{evaluate:[2,3,1,""],gradient:[2,3,1,""]},"lightkurve.targetpixelfile":{KeplerTargetPixelFile:[3,1,1,""]},"lightkurve.targetpixelfile.KeplerTargetPixelFile":{cadenceno:[3,2,1,""],campaign:[3,2,1,""],centroids:[3,3,1,""],channel:[3,2,1,""],column:[3,2,1,""],dec:[3,2,1,""],flux:[3,2,1,""],flux_bkg:[3,2,1,""],flux_bkg_err:[3,2,1,""],flux_err:[3,2,1,""],get_bkg_lightcurve:[3,3,1,""],get_prf_model:[3,3,1,""],hdu:[3,2,1,""],header:[3,3,1,""],keplerid:[3,2,1,""],mission:[3,2,1,""],module:[3,2,1,""],n_good_cadences:[3,2,1,""],nan_time_mask:[3,2,1,""],output:[3,2,1,""],pipeline_mask:[3,2,1,""],plot:[3,3,1,""],quality:[3,2,1,""],quarter:[3,2,1,""],ra:[3,2,1,""],row:[3,2,1,""],shape:[3,2,1,""],time:[3,2,1,""],to_fits:[3,3,1,""],to_lightcurve:[3,3,1,""]},"lightkurve.utils":{KeplerQualityFlags:[4,1,1,""],channel_to_module_output:[4,4,1,""],module_output_to_channel:[4,4,1,""],running_mean:[4,4,1,""]},"lightkurve.utils.KeplerQualityFlags":{ApertureCosmic:[4,2,1,""],Argabrightening:[4,2,1,""],ArgabrighteningOnCCD:[4,2,1,""],AttitudeTweak:[4,2,1,""],CoarsePoint:[4,2,1,""],CollateralCosmic:[4,2,1,""],DEFAULT_BITMASK:[4,2,1,""],Desat:[4,2,1,""],DetectorAnomaly:[4,2,1,""],EarthPoint:[4,2,1,""],HARDEST_BITMASK:[4,2,1,""],HARD_BITMASK:[4,2,1,""],ImpulsiveOutlier:[4,2,1,""],ManualExclude:[4,2,1,""],NoData:[4,2,1,""],NoFinePoint:[4,2,1,""],OPTIONS:[4,2,1,""],PossibleThrusterFiring:[4,2,1,""],RollingBandInAperture:[4,2,1,""],RollingBandInMask:[4,2,1,""],STRINGS:[4,2,1,""],SafeMode:[4,2,1,""],SensitivityDropout:[4,2,1,""],ThrusterFiring:[4,2,1,""],ZeroCrossing:[4,2,1,""],decode:[4,5,1,""]},lightkurve:{lightcurve:[1,0,0,"-"],prf:[2,0,0,"-"],targetpixelfile:[3,0,0,"-"],utils:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:classmethod"},terms:{"00035b":9,"00ff00":13,"0x107a3b588":13,"0x10da92080":9,"0x10e0235f8":9,"0x1141e66a0":[10,12],"0x115484e10":[10,12],"0x117b73cf8":14,"0x117bde048":14,"0x1c1ae20be0":9,"0x1c1aebd400":9,"0x1c1d474f60":13,"0x1c1d4c5128":13,"10b":9,"128g5002v":1,"1e2":2,"1e3":2,"2002a":9,"2009350155506_lpd":9,"2010078095331_llc":[10,12],"2010078095331_lpd":[10,12,14],"2011073133259_llc":1,"2011apj":1,"2013098041711_lpd":2,"2016pasp":1,"20b":1,"23t02":14,"26a":9,"2e5":2,"2mass":14,"3498db":13,"369k":9,"4028x5x5":14,"42z":14,"4_2011265_prf":2,"4e5":2,"65it":9,"84it":13,"boolean":3,"break":1,"case":[8,10,12,14],"class":[1,2,3,4,9],"default":[1,2,3,4,8,10,12],"export":1,"float":[1,2],"function":[0,1,4,5,9,14],"import":[1,2,9,10,12,13,14],"int":[1,2,3,4],"long":[1,9,10,12,13,14],"new":[1,3,6,8,10,12,13,14],"public":5,"return":[1,2,3,4,13],"short":[1,4,9],"true":[1,3,9,14],"try":8,ADDED:6,Ames:14,And:9,FOR:9,For:[1,10,12,14],THE:9,That:6,The:[1,2,3,4,5,7,8,10,12,13,14],Then:[9,10,12],There:[10,12,14],These:14,Using:13,_get_eigen_vector:13,_plot_normflux_arclength:13,_plot_rotated_centroid:13,_rotat:13,_subplot:[1,3,9,10,12,13,14],a_v:14,about:[8,9,14],abov:[1,8,14],abs:[2,9],access:[8,10,12,14],across:14,activ:6,actual:14,adapt:1,add:[1,6,9,14],added:[3,5],adding:6,addit:[1,2],addition:2,administr:8,adopt:6,adsab:9,aforement:1,after:[1,2],against:1,ahead:6,aid:1,al_dens:13,algorithm:[1,5,9],align:1,all:[1,2,3,5,8,10,12,14],allow:[10,12],along:9,alongsid:8,alreadi:[8,10,12,14],also:[1,14],altern:[3,8],alwai:8,amplitud:1,anaconda3:9,anaconda:8,analysi:9,analyt:[1,5],analyz:7,angl:2,ani:4,anim:5,animate_spot:5,anomali:4,apertur:[3,4,5,9,10,12,14],aperture_mask:[3,9,14],aperturecosm:4,api:7,appaloosa:5,appli:[1,9,13],arang:13,arc:6,archiv:[1,2,3,4,8,9,10,12],archive_manu:3,arclength:[1,13],arcsec:14,arcsecond:[13,14],argabrighten:4,argabrighteningonccd:4,argsort:13,argument:[1,3,9],around:2,arrai:[1,2,3,4,10,12,13,14],array_split:13,arxiv:2,ascens:14,associ:[1,2],assum:1,asterosei:5,asteroseismolog:5,astronom:[5,7],astropi:[1,6,8],attenu:1,attitud:4,attitudetweak:4,attribut:[1,2,3,10,12],autom:5,avail:[1,8],avanderb:13,averag:[1,4],awai:9,axes:[1,3,9,10,12,13,14],axessubplot:[1,3,9,10,12,13,14],axi:[1,13,14],background:[2,3,14],bad:[5,14],band:[4,14],barycent:14,base:[1,3,5,14],basi:[1,10,12],basic:[5,9],batman:5,bay:[1,5],bayes_factor:1,beauti:5,becaus:[8,14],been:[1,2,3,5,10,12],befor:1,beforehand:1,behaviour:3,behind:1,best:[1,2],best_period:[1,9],between:1,bin:[1,13],bin_and_interpol:1,bin_mean:13,binari:5,binned_lc:1,binsiz:1,bitmask:[1,3,4],bitpix:14,bitstr:4,bjd:13,bkg:3,bkg_fit:2,bkg_model:2,bkg_param:2,block:1,blue:13,bodi:5,bool:[1,3],both:[1,10,12],bottom:2,boundari:1,box:[1,9],box_period_search:[1,9],branch:6,breakpoint:[1,13],brief:6,briefli:1,bright:13,brows:6,brute:1,bryson:2,bspl:13,bspline:[1,13],bugfix:6,build:[2,10,12],built:[10,12],button:6,cadenc:[1,2,3,4,5,10,12,14],cadenceno:[1,3,14],cal:14,calcul:[1,5,13],calibr:[2,5,14],call:14,callabl:2,campaign:[1,3],can:[1,2,3,4,5,8,9,10,12,13,14],catalog:14,caus:14,causal:5,cave:5,cbv:[1,10,12],cbv_flux:1,cbv_lc:1,cbv_list:1,ccd:[4,14],cdpp:[1,10,12,13],celerit:5,celesti:14,center:2,center_col:2,center_row:2,centroid:[1,2,3,13],centroid_col:[1,13],centroid_row:[1,13],centroid_typ:1,cfa:13,chang:[1,13],channel:[1,2,3,4,14],channel_to_module_output:4,characterist:1,check:[1,5,10,12],checkout:6,checksum:14,choic:6,choos:[10,12],classif:5,classmethod:4,clean_lightcurv:1,cleaner:[10,12],clearli:9,cleve:1,click:6,clip:1,clone:[6,8],cmap:9,coars:[4,14],coarsepoint:4,code:[1,5,7],coeff:1,coeffici:1,col:[1,13],col_centr:3,collater:[4,5],collateralcosm:4,collect:14,color:[1,3,9,13,14],colorbar:3,column:[1,2,3,4,14],com:[6,8],combin:1,command:8,commit:6,common:[1,8],commun:7,compar:6,complement:5,comput:[1,2,4,6,13],compute_cotrended_lightcurv:1,compute_sg_nois:1,condit:[10,12],config:13,configur:1,conform:14,consid:[1,8],constant:[1,2,9],contain:[1,2,3,10,12,14],contamin:14,contribut:7,control:5,convert:[4,5,10,12],coordin:[1,2,14],corner:[2,6],corr_flux:13,correct:[1,5,9,10,12,13,14],corrected_lightcurv:1,correctli:6,correspond:1,cosmic:[4,10,12,14],cosmic_rai:14,cost:1,cotrend:[1,10,12],could:13,count:14,cov:13,covari:1,cpm:5,creat:[1,2,5,9,10,12,14],creation:14,creator:14,cross:4,crowd:5,csv:[1,13],cube:3,curv:[1,4,5,7,11,14],cut:14,d25_lcbv:1,d51:14,d51mag:14,dai:[1,9,10,12,13],darken:5,data:[1,2,3,4,7,9,10,12,14],data_rel:14,data_search:[10,12],datafram:1,date:14,dec:[3,14],dec_obj:14,decatur:5,declin:14,decod:4,decorrel:1,def:13,default_bitmask:4,defin:[1,2,3,9],deg:14,degre:1,deme:1,demystifi:[10,12],dens:1,dep:8,depend:[1,13],depth:1,deriv:[2,13],desat:4,desatur:4,describ:[1,3,9],descript:[4,6],design:2,desir:8,detail:[1,9,10,12],detect:[5,14],detector:[2,4,14],detectoranomali:4,determin:[1,5,14],develop:[1,5,6,7],deviat:1,dfm:5,dict:[1,2,3],dictionari:[1,2],differ:14,differenti:1,dimens:[2,3,14],dimension:2,direct:2,directli:14,directori:[1,8],discontinu:1,discuss:[1,6],distribut:[2,8],divid:1,doc:8,doctest:[1,2],document:4,doe:1,domain:[1,5],domin:1,done:[1,2],dot:13,double_scalar:9,doubt:6,down:[1,9],downlink:14,download:[1,2,10,12],dropout:4,durat:1,dure:14,e67e22:13,each:[1,2,3,4,10,12,14],earth:[4,9],earthpoint:4,easi:5,easier:[1,10,12,14],easiest:8,easili:14,ebminusv:14,eclips:[1,5],edu:[1,2,3,9,10,12,13],effect:14,eig_val:13,eig_vec:13,eigenvector:1,eigh:13,either:[10,12],element:[1,2],empti:4,enabl:3,encod:4,encount:[6,9],encourag:[1,6],end:13,enhanc:6,entri:1,enviro:6,ep60021426alldiagnost:13,epic:13,equal:[1,2],equinox:14,erik:5,error:1,estim:[1,2,9],etc:[9,14],evalu:2,event:[1,4],everest3:1,everest:[1,5],everi:[1,2,3,10,12,14],everyth:6,exactli:1,exampl:[1,2,10,12,14],except:2,exclud:4,execut:6,exoplanet:[1,5],experi:8,experiment:[1,5],explain:4,ext:[1,3,14],extend:14,extens:[1,3,8,14],extent:14,extinct:14,extnam:14,extract:[2,3,5],extver:14,factor:1,fall:14,fals:[1,3,5,13,14],fast:5,favorit:9,featur:6,feh:14,fetch:6,few:9,fewer:[10,12],ffi:5,ffiorbust:5,field:[1,5,13],figsiz:[9,13],figur:[9,13,14],figure_format:13,file:[0,1,2,4,5,6,7,9,11],filev:14,fill:1,filter:[1,9,13],find:[1,5,14],fine:[4,5],fire:[4,14],first:[1,3,9,10,12,14],firstli:[10,12],fit:[1,2,3,5,9,10,12,13,14],fit_bsplin:1,fix:2,flag:[1,3,4,8,14],flare:5,flat:[1,9,13],flatten:[1,9],flatten_lc:1,flattened_lc:1,flatter:[10,12],flti:5,flux:[1,2,3,5,7,9,10,12,13,14],flux_bkg:[3,14],flux_bkg_err:[3,14],flux_err:[1,3,14],flux_fit:2,flux_typ:1,fold:[1,9,10,12],folded_lightcurv:1,follow:[1,2,3,6,8,13],forc:1,fork:[5,6],form:[1,13],format:[1,8,14],fortran:5,fotometri:5,found:[4,10,12],fpc:2,fpp:5,frame:[1,3,13,14],free:1,frequenc:1,friendli:7,from:[1,2,4,5,8,9,13,14],full:[1,4,14],galact:14,galaxi:5,gaussian:[1,5],gener:[1,2,3,5,8,10,12,14],get:8,get_bkg_lightcurv:3,get_cbv_url:1,get_cbvs_list:1,get_initial_guess:2,get_lightcurv:1,get_prf_model:3,get_residu:2,gff:13,giant:1,gif:5,gilliland:1,git:[6,8],github:[1,7,8],give:4,given:[1,2,3,4,14],gkcolor:14,glat:14,glon:14,gmag:14,going:[10,12],golai:[1,9],good:[1,3,13],gov:6,grad_prf:2,gradient:2,grai:9,graviti:14,grcolor:14,great:5,grid:[1,5],guess:2,guest:[6,7],guidanc:5,handl:1,happen:7,hard:[1,3,4],hard_bitmask:4,hardest:[1,3,4],hardest_bitmask:4,harvard:[9,13],has:[1,2,3,8,9,10,12,14],hat:1,have:[1,5,8,9,10,12,14],haz:5,hdu:[1,3,14],head:[6,13],header:[1,3,9,14],henc:1,here:[10,12,14],high:13,highli:8,highlight:3,hks5jjr5hjr5hjr5:14,hmag:14,home:8,hour:1,how:[6,8,10,12,13],howev:1,hst:5,html:8,http:[1,2,3,6,8,9,10,12,13],human:4,icr:14,idea:1,ident:2,identifi:14,ight:[],ignor:[1,3],iid:1,imag:[2,14],implement:[1,5],impuls:4,impulsiveoutli:4,imshow:2,includ:[1,8,14],independ:[1,14],index:[1,3],index_col:13,indic:1,individu:5,infer:5,inform:14,initi:[2,3],inject:5,inlin:[9,10,12,13,14],inlinebackend:13,input:[13,14],inspect:7,instal:[6,7],instanc:[1,2,3],institut:14,instrum:14,integ:[1,3],integr:[1,2],integrand:1,intent:1,interact:5,interest:[9,14],interfac:[2,5],internet:8,interp1d:13,interp_func:13,interpol:[1,2,13],introduc:13,intuit:14,invalid:9,invers:1,investig:[10,12],irradi:1,isochron:5,isoclassifi:5,issu:6,iter:1,iterative_box_period_search:1,its:[1,6,8],itself:14,jeff:1,jkcolor:14,jmag:14,job:14,johnson:1,johsnon:13,jointprior:2,jump:5,just:14,jvc:1,jvmirca:9,jwst:5,k2ephem:5,k2flix:5,k2fov:5,k2mosaic:5,k2p:5,k2phot:5,k2photometri:5,k2pipelin:5,k2plr:5,k2sc:5,k_p:1,kadenza:5,keep:13,kepcal:5,kepfg:5,kepler:[1,2,3,4,5,6,7,10,12,14],kepler_orreri:5,keplercbvcorrector:1,keplergo:[6,8],keplerid:[1,3,14],keplerlightcurv:[1,3,10,12],keplerlightcurvefil:[1,10,12],keplerport:5,keplerprf:2,keplerqualityflag:4,keplersci:8,keplersmear:5,keplertargetpixelfil:[2,3,9,10,12,13,14],kepmag:14,kepprf:2,keputil:5,ketu:5,keyword:[1,3],kic:14,kmag:14,knot:13,know:[9,14],known:[1,3,9],koi3278:5,koi:5,kplr006922244:[10,12,14],kplr008462852:[1,2],kplr011904151:9,kplr13:2,kplr16:2,kplr2011073133259:1,kplr:5,ktransit:5,kwarg:[1,2,3],label:1,lack:1,lambda:2,laplacianlikelihood:1,laplacianprior:1,last:13,later:8,latest:8,latitud:14,lc_correct:13,lc_file:1,lcf:[10,12],lcp:5,ldtk:5,least:9,left:2,legend:1,length:[1,4],less:1,let:[6,9,10,12,13,14],level:[1,5,10,12,14],lib:9,librari:5,light:[1,4,5,7,9,11,14],lightcurv:[0,3,4,5,7,9,13],lightkurv:[1,2,3,4,5,10,12,13,14],like:[1,2,3,6],likelihood:1,limb:5,limit:1,linalg:13,line2d:[9,13],line:[2,9,13],linear:[1,13],linestyl:1,link:9,linspac:13,list:[1,2,4,5,8],littl:[10,12],load:[2,9],local:9,locat:[2,14],log10:14,log:[1,6,9],log_posterior:1,logg:14,longitud:14,look:[1,9,10,12,13,14],loss_funct:2,lossfunct:2,lot:14,low:1,lower:2,luger:1,macula:5,made:1,mag:14,magnitud:14,mai:[1,2,5,8,14],mail:6,main:6,major:13,make:[1,5,6,8,9,14],mani:[5,14],manual:[3,4],manualexclud:4,mark:1,markers:[1,9],mask:[1,3,4,9,13,14],mask_color:3,math:2,matlab:[1,5],matplotlib:[1,2,3,8,9,10,12,13,14],matrix:[1,2],max:13,max_period:[1,9],maxim:1,maximum:1,mazeh:5,mcmc:5,mean:[1,2,3,4,8,13,14],measur:[1,2,14],median:[1,13],memo:14,meta:[1,10,12,14],metadata:[1,3],metal:14,method:[1,2,3,4,9,10,12,14],metric:1,microlens:5,might:[10,12,14],million:1,min:[1,13],min_period:[1,9],minim:[1,2],minimum:1,mission:[1,2,3,5,7,9,10,12,14],mode:[1,4,14],model:[1,2,5],modern:8,modestli:1,modifi:6,modul:[3,4,5,14],module_output_to_channel:4,mom_centr:1,moment:[2,3],more:[1,3,8,9,10,12,14],mosaic:5,most:[8,14],motion:[1,13,14],move:4,movi:5,much:[10,12],mulensmodel:5,multi:5,multipl:1,murzim:[1,14],must:[1,10,12],n_good_cad:3,name:[1,3,6,14],nan:[1,3],nan_time_mask:3,nasa:[1,5,6,7,14],naxi:14,ndarrai:[1,3],nearbi:14,necessari:[2,3,8,9],need:13,new_lc:1,next:14,nextend:14,niter:[1,13],nodata:4,nofinepoint:4,nois:[1,2],none:[1,2,3],norm:1,norm_ff:13,normal:[1,13,14],normalized_lightcurv:1,normflux:1,note:[1,9,10,12,14],notebook:13,now:[1,6,9,10,12,13,14],nperiod:[1,9],number:[1,2,3,4,14],numer:1,numpi:[1,8,9,13,14],numpydoc:8,nutella:5,nyquist:1,object:[1,2,3,5,9,10,12,14],observ:[5,6,7,14],obsmod:14,obtain:[1,5,7],occur:1,odd:1,offer:7,offic:[6,7],offici:1,often:9,ogip:14,oktopu:[1,2],onc:6,one:[1,3,10,12,13,14],onli:[1,2,10,12,13,14],onto:[1,2,14],open:[1,6,9,10,12,14],oppos:1,opt_param:2,opt_result:1,optim:[1,2,4,9],option:[1,3,4,8,10,12],orbit:9,order:[1,2,9],org:[1,2,8],origin:[1,2,6,13,14],orreri:5,other:[1,14],otherwis:[1,8],our:[9,13],out:[1,3,9,10,12,13,14],outlier:[1,4],output:[3,4,9,14],over:[3,14],overlai:5,own:[13,14],oxkeplersc:5,p5_deriv:13,packag:[5,8,9],page:5,pair:[2,4],panda:[1,13],pandexo:5,paper:13,parallax:14,param:2,paramet:[1,2,3,4],parametr:2,part:[1,14],particular:[7,10,12],pass:[1,2,3,9,10,12,13],patch:6,path:[1,3,9],path_or_buf:1,pdcsap_flux:[1,10,12],pdf:3,per:1,perform:[2,3,5],period:[1,9,10,12],period_scal:[1,9],permissionerror:8,petigura:5,phase:[1,10,12],phot:2,photodynam:5,photomet:14,photometr:1,photometri:[0,1,3,5,9,10,12,14],php:[10,12],piec:1,piecewis:[1,13],pink:[3,9,13],pip:[6,8],pipelin:[1,3,5,9,10,12,14],pipeline_mask:[3,9,14],pix:5,pixel:[0,1,2,4,5,7,9,11],planet:[3,10,12],planetplanet:5,planetz:5,pld:[1,5],pleas:[6,9],plot:[1,2,3,9,10,12,13,14],plot_imag:3,plottyp:1,plt:[1,2,9,13],pmdec:14,pmra:14,pmtotal:14,point:[0,1,4,5,14],poissonposterior:2,poly1d:13,polyfit:13,polynomi:1,polyord:[1,13],pos_corr1:14,pos_corr2:14,posit:[1,2,3,13,14],possibl:[4,5],possiblethrusterfir:4,postag:14,posterior:[1,2,9],powel:[1,2],ppm:1,pre:[5,10,12],precis:[1,9],previou:[10,12],prf:[2,3],prf_model:2,prfphotometri:2,primari:14,prime:5,print:14,prior:[1,2,5],prioriti:3,prob:9,probabl:[1,5],problem:[5,6],procedur:1,process:[1,5,10,12,14],procver:14,produc:5,product:5,profil:5,program:14,project:7,proper:14,properti:[5,9],propos:1,provid:[1,2,3,5,13],proxi:1,psf:[2,14],purpos:5,push:6,pyke:[5,13],pymacula:5,pyplot:[1,2,9,13],pysysrem:5,pysyzygi:5,python3:9,python:[5,8,9],pytransit:5,q08:1,qualiti:[1,3,4,5,10,12,14],quality_bitmask:[1,3],quarter:[1,3,10,12,14],quest:1,quick:1,quicklook:5,r1212:[2,3],r1414:[],r147:1,r28:1,r38:1,r48:1,r60410:14,ra_obj:14,radesi:14,radial:5,radian:2,radii:14,radiu:14,radvel:5,rai:[4,10,12,14],rais:4,ran:1,random:2,rang:1,rather:14,ratio:1,raw:[1,3,5,13,14],raw_cnt:14,rb_level:14,read:[5,8,10,12,14],read_csv:13,readabl:4,readi:6,realli:5,recommend:[1,3,6,8],record:[10,12],redden:14,reduc:5,reduct:5,ref_col:2,ref_row:2,refer:[1,2,3,13,14],region:[1,5],reject:1,rel:13,relat:[5,14],releas:14,remain:1,remaind:1,remot:6,remov:[1,3,9,10,12],remove_nan:1,remove_outli:1,repeat:1,repo:[1,14],report:1,repositori:6,repres:2,respect:[1,2],respectivelli:[1,2],respons:[2,14],result:[1,2],retain:1,retina:13,return_mask:1,return_trend:[1,9],right:[1,6,14],rmag:14,robovett:5,roll:[4,14],rollingbandinapertur:4,rollingbandinmask:4,root:1,rot_colp:13,rot_rowp:13,rotat:[1,2,5,13],rotate_centroid:1,rotation_angl:2,routin:1,row:[1,2,3,13,14],row_centr:3,run:[1,4,8,9],running_mean:4,runtimewarn:9,s_integrand:13,safe:[4,14],safemod:4,same:1,sampl:[1,2,3,13],sap:[10,12],sap_flux:1,sap_lc:1,satur:1,save:3,savgol_filt:1,savgol_polyord:1,savgol_window:[1,13],savitski:1,savitzki:[1,9],scalar:2,scale:[1,2,9],scale_col:2,scale_row:2,scatter:1,scene:2,scene_model:2,scenemodel:2,scienc:14,scientif:[5,8,9],scipi:[1,2,8,9,13],scp:14,scpid:14,sdss:14,search:[1,3,9,10,12],season:14,second:14,secondari:1,see:[1,6,9,10,12,13,14],seen:14,select:[3,5],self:[1,5,13],sensit:4,sensitivitydropout:4,sensor:5,separ:1,seri:[1,2,7],serv:1,set:[1,14],set_titl:1,setup:6,sever:14,sff:[1,13],sffcorrector:[1,13],sgcdpp:1,shade:1,shape:[2,3,10,12,14],should:[1,3,6,8],show:[3,5,10,12,14],show_colorbar:3,shrinkag:5,sigma:[1,14],sigma_1:1,sigma_2:1,sigma_clip:1,signal:[1,5],signatur:[1,5],signific:6,similar:[10,12],similiar:9,simpl:[1,2,5,9,10,12,14],simplekeplerprf:[2,3],simpler:1,simpli:[8,14],sinc:8,site:9,size:[1,2,10,12],skip:[1,2],skope:5,sky:5,skygroup:14,slightli:[10,12],smaller:[10,12,14],smart:1,smooth:1,soc:14,softwar:7,solar:[5,14],solv:[1,5],some:[9,10,12,14],someth:6,sometim:8,sort:[1,13],sorted_ind:13,sourc:[1,2,3,4,9,14],space:5,spacecraft:[1,10,12,13],span:1,specif:1,specifi:[1,2,3],sphinx:8,spitzer:1,spldcorrector:1,spline:[1,13],splrep:13,splt:13,spot:5,spread:[0,5,14],sqrt:13,squar:[1,9],ssh:[1,14],stack:14,stamp:[5,10,12,14],standard:[1,6,9,14],star:[1,5,9,14],starspot:5,start:[6,9],stat:1,statist:1,stellar:[5,14],step:[1,6],stitch:1,stitched_lc:1,store:[9,14],str:[1,2,3,4],straight:8,string:[1,3,4,14],strongli:[1,8],stsci:[1,2,3,9,10,12],subclass:[1,2],subdivid:1,submit:6,subsequ:1,subspac:1,sudden:4,suggest:6,sum:[3,10,12,14],summari:1,superstamp:5,superstampfit:5,support:[1,7],sure:6,surfac:14,survei:5,svn:[1,14],synchron:5,synthet:5,sysrem:5,system:[5,14],systemat:[1,5,10,12],syzygi:5,tabl:[1,4,5,14],tag:14,take:[4,9,10,12,14],tamuz:5,tantamount:1,targ:[2,9,10,12,14],target:[0,5,7,9,11],target_pixel_fil:[2,9],targetpixelexporterpipelinemodul:14,targetpixelfil:3,task:[9,13],techniqu:1,teff:14,telescop:[5,14],temperatur:14,tend:8,term:[1,9,10,12,13],termin:8,terra:5,terrestri:3,tess:[5,7],text:9,than:[1,10,12,14],thei:[1,14],them:[6,10,12,14],themselv:14,therefor:1,thi:[1,2,3,4,5,6,8,9,10,12,13,14],those:8,thought:14,thruster:[4,13,14],thrusterfir:4,tidal:5,time:[1,2,3,5,7,9,10,12,13,14],timecorr:14,timeslic:14,timversn:14,titl:[1,13,14],tmindex:14,tmp1:9,tmp2:9,to_csv:1,to_fit:[1,3],to_lightcurv:[3,9,10,12],to_panda:1,to_tabl:1,too:[13,14],took:14,tool:[5,14],toolkit:5,top:6,total:[2,14],tpf:[2,3,5,9,10,12,14],tpf_flux:[1,2],track:13,transit:[1,5,9,10,12],transit_dur:1,translat:2,trappist1:5,trappist:5,trapz:13,trend:[1,5,9,10,12,13],trend_lc:1,trial:1,trial_period:1,trim:14,trunk:1,ttableid:14,ttvfast:5,ttype10:14,ttype11:14,ttype12:14,ttype13:14,ttype1:14,ttype2:14,ttype3:14,ttype4:14,ttype5:14,ttype6:14,ttype7:14,ttype8:14,ttype9:14,ttype:14,tupl:[1,3,4],turn:[1,10,12],tutori:[6,9,10,12,14],tvguid:5,tweak:4,two:[1,2,9,10,12],type:[1,9,10,12,14],uncertain:14,uncertainti:[1,3,14],uniformprior:2,uniqu:14,unit:1,unless:8,updat:[1,14],upgrad:8,upon:1,upper:1,upstream:6,url:[1,9],use:[1,2,3,5,9,10,12,13,14],used:[1,3,4],user:[1,7,8,9],usernam:6,using:[1,2,3,5,8,9,10,12,13,14],usual:[10,12,14],util:[0,3],valu:[1,2,3,4,9,13,14],van:1,vanderburg:1,variabl:[5,9],variat:[2,5],variou:[1,4],vector:[1,10,12,13],veloc:5,version:[1,6,14],versu:13,vespa:5,via:6,view:[5,14],wai:[1,7,8,10,12],want:[6,8,9,10,12,14],waveform:1,wavelet:1,welcom:[6,7],were:1,wget:13,what:[7,11],where:[1,2,14],whether:[1,3,5],which:[1,2,8,9,10,12,14],whilst:1,whole:1,whose:3,width:[1,2],wiki:1,wikipedia:1,window:[1,4,8,13],window_length:1,window_s:4,wise:1,within:[3,14],work:[5,10,12,13,14],would:[1,6],wrapper:5,write:[1,8],written:5,www:13,x0_prime:13,x1_prime:13,x_dens:13,x_fit:2,xlabel:[1,9,13],xlim:13,xmax_prim:13,xtick:13,y_fit:2,year:9,yet:1,ylabel:[1,9,13],ylim:13,you:[6,8,9,10,12,13,14],your:[6,8],yourself:[10,12],ytick:13,zero:4,zerocross:4,zmag:14,zucker:5},titles:["API documentation","Lightcurve","Point Spread Function Photometry","Target Pixel File","Utilities","Community Software","Contributing","lightkurve Documentation","Installation","How to find a Kepler planet with <strong>lightkurve</strong>","What are Light Curve Files?","lightkurve tutorials","What are Light Curve Files?","Replicate Vanderburg &amp; Johnson 2014 K2SFF Method","What are Target Pixel Files?"],titleterms:{"function":2,access:5,acknowledg:7,analysi:5,api:0,astrophys:5,build:8,chang:6,code:6,commun:5,contribut:6,curv:[10,12],data:[5,13],detrend:5,develop:8,diagram:[],document:[0,6,7,8],file:[3,10,12,14],find:9,frame:5,from:[10,12],full:5,get:13,github:6,guidelin:6,how:9,imag:5,inherit:[],instal:8,johnson:13,k2sff:13,kepler:9,light:[10,12],lightcurv:[1,10,12],lightkurv:[6,7,8,9,11],mast:[10,12],metadata:5,method:13,other:5,pdcsap:[10,12],photometri:2,pixel:[3,10,12,14],planet:[5,9],point:2,popul:5,posit:5,propos:6,pull:6,relat:[],replic:13,request:6,requir:8,scienc:5,search:5,softwar:5,spread:2,stabl:8,statist:5,target:[3,10,12,14],tutori:[7,11],using:6,util:4,vanderburg:13,version:8,what:[10,12,14]}})